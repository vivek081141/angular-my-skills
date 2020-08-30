import {Injectable, OnInit} from '@angular/core';
import {Feed} from '../models/Feed';
import {FakeDataService} from './fake-data.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedDataService{

  private appName = 'localhost:4211';
  private myPostsUrl = this.appName + `/getMyPost`;
  private myFeedsUrl = this.appName + `/getMyFeeds`;

  constructor(private fakeDataService: FakeDataService, private http: HttpClient) { }

  getMyPosts(username: string): Observable<Feed[]> {
    return this.doHttpGetWithOptions<Feed[]>(`${this.myPostsUrl}?username=${username}`);
   // return this.fakeDataService.getMyPosts();
  }


  getMyFeeds(username: string): Observable<Feed[]> {
    return this.doHttpGetWithOptions<Feed[]>(`${this.myFeedsUrl}?username=${username}`);
    // return this.fakeDataService.getMyFeeds();
  }


  doHttpGetWithOptions<T>(url: string, options?: any): Observable<T> {
    if (options == null) {
      options = {};
    }
    options.observe = 'body';

    // @ts-ignore: Call the get method that returns Observable<Response>
    return this.http.get<T>(url, options);
  }
}
