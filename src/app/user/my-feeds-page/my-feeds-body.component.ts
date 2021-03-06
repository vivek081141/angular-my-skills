import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertDataService} from '../../services/alert-data.service';
import {debounceTime} from 'rxjs/operators';
import {FeedDataService} from '../../services/feed-data.service';
import {Feed} from '../../models/Feed';
import {EventDataService} from '../../services/event-data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-my-feeds-body',
  templateUrl: './my-feeds-body.component.html',
  styleUrls: ['./my-feeds-body.component.css']
})
export class MyFeedsBodyComponent implements OnInit, OnDestroy {
  alert: string;
  error: string;
  feeds: Feed[] = [];
  eventSubscription: Subscription;

  constructor(private alertService: AlertDataService, private feedDataService: FeedDataService,
              private eventDataService: EventDataService) {
  }

  ngOnInit(): void {
    this.initAlertSubscription();
    this.initMyFeeds();
    this.eventChange();
  }

  /* posting a feed from the child component MyPostFormComponent */
  postFeed(message: string): void {
    if (message.length < 0) {
      return;
    }

    const feed: Feed = new Feed();
    feed.description = message;
    feed.userId = this.feedDataService.getLoggedInUser();
    feed.likesCount = 0;
    this.feedDataService.postFeed(feed).subscribe(
      feeds => {
        console.log(feeds);
        this.feeds = feeds;
        this.alertService.publishAlertObservable('The post has been submitted successfully');
      },
      error => {
        console.log(error);
      }
    );

  }

  initAlertSubscription(): void {
    this.alertService.subscribeAlertObservable().subscribe(
      alert => this.alert = alert
    );
    this.alertService.subject.pipe(
      debounceTime(3000)
    ).subscribe(() => this.alert = '');
  }

  initMyFeeds(): void {
    this.feedDataService.getMyPosts(this.feedDataService.getLoggedInUser()).subscribe(
      next => this.feeds = next,
      error => this.error = 'Error has occurred'
    );
  }

  eventChange(): void {
    this.eventSubscription = this.eventDataService.subscribeEvent().subscribe(next => {
      console.log(next);
      if (next === 'DELETED') {
        this.feedDataService.getMyPosts(this.feedDataService.getLoggedInUser()).subscribe(
          feeds => this.feeds = feeds,
        );
      }
    });
  }

  ngOnDestroy(): void {
    this.alertService.publishAlertObservable('');
    this.eventSubscription.unsubscribe();
  }

}
