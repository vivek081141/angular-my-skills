import { Injectable } from '@angular/core';
import {Feed} from '../models/Feed';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  /**
   * static data to get all the posts by the user
   */
  public getMyPosts(): Feed[] {
    const feeds: Feed[] = [
      {
        id: 1,
        user: {
          userName: 'Vivek Agrawal',
          displayProfile: 'vivek.png'
        },
        postedDate: '8th August 2020',
        header: 'India vs Australia world cup match',
        description: 'India won the match by 5 wickets. Virat Kohli was adjusted man of the match.',
        commentsCount: 3,
        likesCount: 4,
        commentList: [
          {
            feedId: 1,
            comment: 'Yay, India has won. Thank God!',
            commentedBy: 102,
            commentedOn: '10th August',
            commentedByDP: 'brad_pitt_avatar.jpg'
          },
          {
            feedId: 1,
            comment: 'Virat is a run machine, another trophy for him.',
            commentedBy: 102,
            commentedOn: '10th August',
            commentedByDP: 'BBC-News-Avatar.png'
          },
          {
            feedId: 1,
            comment: 'Austria need to win all matches in order to qualify finals.',
            commentedBy: 101,
            commentedOn: '10th August',
            commentedByDP: 'fox-news.jpg'
          }
        ]
      },
      {
        id: 2,
        user: {
          userName: 'Vivek Agrawal',
          displayProfile: 'vivek.png'
        },
        postedDate: '7th August 2020',
        header: 'Coronavirus: Why Spain is seeing second wave',
        description: 'Spain saw one of the most draconian Covid-19 lockdowns in Europe, but two months after it was lifted, the virus is spreading faster than in any neighbouring nation.',
        commentsCount: 2,
        likesCount: 2
      },
      {
        id: 3,
        user: {
          userName: 'Vivek Agrawal',
          displayProfile: 'vivek.png'
        },
        postedDate: '6th August 2020',
        header: 'Donald Trump to visit Kenosha amid unrest',
        description: 'US President Donald Trump is to visit the city in Wisconsin which has seen widespread unrest ' +
          'since a black man was shot in the back and seriously injured by a policeman ',
        commentsCount: 8,
        likesCount: 8
      }
    ];
    return feeds;
  }

  /**
   * static data to get all the feeds for the user
   * 1. feeds posted by user
   * 2. feeds posted by subscriptions
   * 3. feeds posted by friends
   */
  getMyFeeds(): Feed[] {
    const feeds: Feed[] = [
      {
        id: 1,
        user: {
          userName: 'Rahul Gupta',
          displayProfile: 'brad_pitt_avatar.jpg'
        },
        postedDate: '8th August 2020',
        header: 'India vs Australia world cup match',
        description: 'India won the match by 5 wickets.Virat Kohli was adjusted man of the match.',
        commentsCount: 8,
        likesCount: 8
      },
      {
        id: 2,
        user: {
          userName: 'BBC News',
          displayProfile: 'BBC-News-Avatar.png'
        },
        postedDate: '7th August 2020',
        header: 'Coronavirus: Why Spain is seeing second wave',
        description: 'Spain saw one of the most draconian Covid-19 lockdowns in Europe, but two months after it was lifted, the virus is spreading faster than in any neighbouring nation.',
        commentsCount: 2,
        likesCount: 2
      },
      {
        id: 3,
        user: {
          userName: 'Fox News',
          displayProfile: 'fox-news.jpg'
        },
        postedDate: '6th August 2020',
        header: 'Donald Trump to visit Kenosha amid unrest',
        description: 'US President Donald Trump is to visit the city in Wisconsin which has seen widespread unrest ' +
          'since a black man was shot in the back and seriously injured by a policeman ',
        commentsCount: 1,
        likesCount: 1
      }
    ];
    return feeds;
  }

}
