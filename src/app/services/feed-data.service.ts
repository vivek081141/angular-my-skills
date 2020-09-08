import {Injectable, OnInit} from '@angular/core';
import {Comment, Feed} from '../models/Feed';
import {MockDataService} from './mock-data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedDataService {

  private appName = 'http://localhost:8090/feeds';
  private myPostsUrl = this.appName + `/getMyPost`;
  private myFeedsUrl = this.appName + `/getFeeds`;

  constructor(private fakeDataService: MockDataService, private http: HttpClient) {
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  /* get all my posts + friends and subscriptions **/
  getMyPosts(userId: number): Observable<Feed[]> {
    return this.get<Feed[]>(`${this.appName}/getMyPost/${userId}`); // todo this should come from constant.ts
  }

  /* Get My Feeds **/
  getMyFeeds(userId: number): Observable<Feed[]> {
    return this.get<Feed[]>(`${this.appName}/getFeeds/${userId}`);
  }

  /* post Feed **/
  postFeed(feed: Feed): Observable<any> {
    return this.http.post<any>(`${this.appName}/postFeed`, feed, this.httpOptions);
  }

  /* Post a comment **/
  postComment(comment: Comment): Observable<Comment[]> {
    return this.http.post<Comment[]>(`${this.appName}/postComment`, comment, this.httpOptions);
  }

  /* like a feed **/
  likeFeed(feed: Feed): Observable<any> {
    return this.http.put<any>(`${this.appName}/like`, {feedId: feed.id}, this.httpOptions);
  }

  deleteFeed(feed: Feed): Observable<any> {
    return this.http.post<any>(`${this.appName}/delete`, {feedId: feed.id}, this.httpOptions);
  }

  get<T>(url: string, options?: any): Observable<T> {
    return this.http.get<T>(url, this.httpOptions);
  }

  getLoggedInUser(): number {
    return 100;
  }


}
