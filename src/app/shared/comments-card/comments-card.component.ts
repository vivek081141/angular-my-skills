import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../models/Feed';
import {User} from '../../models/User';

@Component({
  selector: 'app-comments-card',
  templateUrl: './comments-card.component.html',
  styleUrls: ['./comments-card.component.css']
})
export class CommentsCardComponent implements OnInit {
  @Input() comments: Comment[];
  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
