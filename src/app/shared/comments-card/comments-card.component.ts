import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../models/Feed';
import {Feed} from '../../models/Feed';
import {FeedDataService} from '../../services/feed-data.service';

@Component({
  selector: 'app-comments-card',
  templateUrl: './comments-card.component.html',
  styleUrls: ['./comments-card.component.css']
})
export class CommentsCardComponent implements OnInit {
  @Input() comments: Comment[];
  @Input() feed: Feed;
  myComment = '';


  constructor(private feedDataService: FeedDataService) { }

  ngOnInit(): void {
  }

  postComment(): void {
    const comment = new Comment();
    comment.feedId = this.feed.id;
    comment.commentedBy  = this.feedDataService.getLoggedInUser();
    comment.comment = this.myComment;
    this.feedDataService.postComment(comment).subscribe(
      next => {
        this.myComment = ''; // making the comment as null
        this.comments = next;
        console.log(next);
      },
      error => {
        console.log(error);
      }
    );
  }

  disablePost(): any {
    if (this.myComment){
      return;
    }
    return 'disabled';
  }
}
