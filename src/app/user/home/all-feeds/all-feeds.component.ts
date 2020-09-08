import {Component, OnDestroy, OnInit} from '@angular/core';
import {Feed} from '../../../models/Feed';
import {FeedDataService} from '../../../services/feed-data.service';
import {EventDataService} from '../../../services/event-data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-all-feeds',
  templateUrl: './all-feeds.component.html',
  styleUrls: ['./all-feeds.component.css']
})
export class AllFeedsComponent implements OnInit, OnDestroy {

  feeds: Feed[] = [];
  error: string;
  private eventSubscription: Subscription;

  constructor(private feedDataService: FeedDataService, private eventDataService: EventDataService) {
  }

  ngOnInit(): void {
    this.initAllFeeds();
    this.eventChange();
  }

  eventChange(): void {
    this.eventSubscription = this.eventDataService.subscribeEvent().subscribe(next => {
      console.log('eventChange');
      if (next === 'DELETED') {
        this.feedDataService.getMyFeeds(this.feedDataService.getLoggedInUser()).subscribe(
          feeds => this.feeds = feeds
        );
      }
    });
  }


  initAllFeeds(): void {
    this.feedDataService.getMyFeeds(this.feedDataService.getLoggedInUser()).subscribe(
      next => this.feeds = next,
      error => {
        this.error = error.toString();
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }
}
