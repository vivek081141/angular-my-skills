import {Component, OnInit} from '@angular/core';
import {FeedDataService} from '../../../services/feed-data.service';
import {Feed} from '../../../models/Feed';

@Component({
  selector: 'app-my-feeds',
  templateUrl: './my-feeds.component.html',
  styleUrls: ['./my-feeds.component.css']
})
export class MyFeedsComponent implements OnInit {

  feeds: Feed[] = [];
  error: string;

  constructor(private feedDataService: FeedDataService) {
  }

  ngOnInit(): void {
    this.feedDataService.getMyPosts('vivek').subscribe(
      next => this.feeds = next,
      error => this.error = 'Error has occurred'
    );
  }

}
