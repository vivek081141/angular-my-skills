import {Injectable, OnInit} from '@angular/core';
import {Comment, Feed} from '../models/Feed';
import {MockDataService} from './mock-data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedDataService{

  private appName = 'localhost:8090/feeds';
  private myPostsUrl = this.appName + `/getMyPost`;
  private myFeedsUrl = this.appName + `/getFeeds`;

  constructor(private fakeDataService: MockDataService, private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })};

  /* get all my posts + friends and subscriptions **/
  getMyPosts(userId: number): Observable<Feed[]> {
     return this.get<Feed[]>(`http://localhost:8090/feeds/getMyPost/${userId}`);
  }

  /* Get My Feeds **/
  getMyFeeds(userId: number): Observable<Feed[]> {
    return this.get<Feed[]>(`http://localhost:8090/feeds/getFeeds/${userId}`);
  }

  /* post Feed **/
  postFeed(feed: Feed): Observable<any> {
    return this.http.post<any>(`http://localhost:8090/feeds/postFeed`, feed, this.httpOptions);
  }

  /* Post a comment **/
  postComment(comment: Comment): Observable<Comment[]> {
    return this.http.post<Comment[]>(`http://localhost:8090/feeds/postComment`, comment, this.httpOptions);
  }

  /* like a feed **/
  likeFeed(feed: Feed): Observable<any> {
    return this.http.put<any>(`http://localhost:8090/feeds/like`, { feedId: feed.id}, this.httpOptions);
  }

  get<T>(url: string, options?: any): Observable<T> {
    return this.http.get<T>(url, this.httpOptions);
  }

  getLoggedInUser(): number {
    return 100;
  }


}
