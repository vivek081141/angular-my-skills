import { Injectable } from '@angular/core';
import {Feed} from '../models/Feed';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  constructor() { }

  /**
   * static data to get all the posts by the user
   */
  public getMyPosts(): Feed[] {
    const feeds: Feed[] = [
      {
        user: {
          username: 'Vivek Agrawal',
          displayProfile: 'vivek.png'
        },
        postedDate: '8th August 2020',
        header: 'India vs Australia world cup match',
        shortDescription: 'India won the match by 5 wickets. Virat Kohli was adjusted man of the match.',
        commentsCount: 3,
        likesCount: 4,
        comments: [
          {
            comment: 'Yay, India has won. Thank God!',
            commentedBy: 'Rahul',
            commentedOn: '10th August',
            commentedByDP: 'brad_pitt_avatar.jpg'
          },
          {
            comment: 'Virat is a run machine, another trophy for him.',
            commentedBy: 'BBC',
            commentedOn: '10th August',
            commentedByDP: 'BBC-News-Avatar.png'
          },
          {
            comment: 'Austria need to win all matches in order to qualify finals.',
            commentedBy: 'FoxNews',
            commentedOn: '10th August',
            commentedByDP: 'fox-news.jpg'
          }
        ]
      },
      {
        user: {
          username: 'Vivek Agrawal',
          displayProfile: 'vivek.png'
        },
        postedDate: '7th August 2020',
        header: 'Coronavirus: Why Spain is seeing second wave',
        shortDescription: 'Spain saw one of the most draconian Covid-19 lockdowns in Europe, but two months after it was lifted, the virus is spreading faster than in any neighbouring nation.',
        commentsCount: 2,
        likesCount: 2
      },
      {
        user: {
          username: 'Vivek Agrawal',
          displayProfile: 'vivek.png'
        },
        postedDate: '6th August 2020',
        header: 'Donald Trump to visit Kenosha amid unrest',
        shortDescription: 'US President Donald Trump is to visit the city in Wisconsin which has seen widespread unrest ' +
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
        user: {
          username: 'Rahul Gupta',
          displayProfile: 'brad_pitt_avatar.jpg'
        },
        postedDate: '8th August 2020',
        header: 'India vs Australia world cup match',
        shortDescription: 'India won the match by 5 wickets.Virat Kohli was adjusted man of the match.',
        commentsCount: 8,
        likesCount: 8
      },
      {
        user: {
          username: 'BBC News',
          displayProfile: 'BBC-News-Avatar.png'
        },
        postedDate: '7th August 2020',
        header: 'Coronavirus: Why Spain is seeing second wave',
        shortDescription: 'Spain saw one of the most draconian Covid-19 lockdowns in Europe, but two months after it was lifted, the virus is spreading faster than in any neighbouring nation.',
        commentsCount: 2,
        likesCount: 2
      },
      {
        user: {
          username: 'Fox News',
          displayProfile: 'fox-news.jpg'
        },
        postedDate: '6th August 2020',
        header: 'Donald Trump to visit Kenosha amid unrest',
        shortDescription: 'US President Donald Trump is to visit the city in Wisconsin which has seen widespread unrest ' +
          'since a black man was shot in the back and seriously injured by a policeman ',
        commentsCount: 1,
        likesCount: 1
      }
    ];
    return feeds;
  }

}
