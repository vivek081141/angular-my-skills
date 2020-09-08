import {Component, Input, OnInit} from '@angular/core';
import {FeedDataService} from '../../../services/feed-data.service';
import {Feed} from '../../../models/Feed';

@Component({
  selector: 'app-my-feeds',
  templateUrl: './my-feeds.component.html',
  styleUrls: ['./my-feeds.component.css']
})
export class MyFeedsComponent implements OnInit {

  @Input() feeds: Feed[] = [];

  constructor(private feedDataService: FeedDataService) {
  }

  ngOnInit(): void {

  }

}
