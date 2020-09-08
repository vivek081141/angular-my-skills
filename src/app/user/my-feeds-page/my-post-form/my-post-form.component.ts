import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FeedDataService} from '../../../services/feed-data.service';
import {AlertDataService} from '../../../services/alert-data.service';


@Component({
  selector: 'app-my-post-form',
  templateUrl: './my-post-form.component.html',
  styleUrls: ['./my-post-form.component.css']
})
export class MyPostFormComponent implements OnInit {
 @Output() messageEvent = new EventEmitter<string>();


  name: string;
  isSuccess: boolean;

  constructor(private feedDataService: FeedDataService, private alertDataService: AlertDataService) { }

  ngOnInit(): void {
  }

  /* message is emitted to parent component MyFeedsBodyComponent */
  postFeed(): void {
    this.messageEvent.emit(this.name);
    this.name = '';
  }


}
