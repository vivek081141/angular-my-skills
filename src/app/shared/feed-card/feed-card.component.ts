import {Component, Input, OnInit} from '@angular/core';
import {Feed} from '../../models/Feed';
import {FeedDataService} from '../../services/feed-data.service';
import {AlertDataService} from '../../services/alert-data.service';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {
  @Input() feed: Feed;
  isCommentVisible: boolean;

  constructor(private feedDataService: FeedDataService, private alertService: AlertDataService) {
  }

  ngOnInit(): void {
  }

  clickComment(): void {
    console.log('Comment has been clicked');
    this.isCommentVisible = !this.isCommentVisible;
  }

  clickLike(): void {
    console.log('Like has been clicked');
    if (this.feedDataService.getLoggedInUser() === this.feed.userId) {
      this.alertService.publishAlertObservable('You can not like your own posts. Please select some other post.');
      return;
    }
    this.feedDataService.likeFeed(this.feed).subscribe(
      next => {
        console.log(next);
        this.feed.likesCount  = this.feed.likesCount + 1;
      },
      error => console.log(error)
    );
  }
}
