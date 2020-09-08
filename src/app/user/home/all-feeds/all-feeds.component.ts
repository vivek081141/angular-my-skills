import { Component, OnInit } from '@angular/core';
import {Feed} from '../../../models/Feed';
import {FeedDataService} from '../../../services/feed-data.service';

@Component({
  selector: 'app-all-feeds',
  templateUrl: './all-feeds.component.html',
  styleUrls: ['./all-feeds.component.css']
})
export class AllFeedsComponent implements OnInit {

  feeds: Feed[] = [];
  error: string;

  constructor(private feedDataService: FeedDataService ) { }

  ngOnInit(): void {
    this.feedDataService.getMyFeeds(this.feedDataService.getLoggedInUser()).subscribe(
      next => this.feeds = next,
      error => {
        this.error = error.toString();
        console.log(error);
      }
    );
  }

}
