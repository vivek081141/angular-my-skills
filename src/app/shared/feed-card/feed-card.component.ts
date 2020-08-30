import {Component, Input, OnInit} from '@angular/core';
import {Feed} from '../../models/Feed';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {
  @Input() feed: Feed;
  isCommentVisible: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  clickComment(): void {
    console.log('Comment has been clicked');
    this.isCommentVisible = !this.isCommentVisible;
  }
}
