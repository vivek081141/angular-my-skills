import {User} from './User';

export class Feed {
  id: number;
  user: User;
  userId?: number;
  postedDate: string;
  header: string;
  description: string;
  commentList?: Comment[];
  commentsCount?: number;
  likes?: Like[];
  likesCount?: number;
}


export class Comment {
  feedId: number;
  comment: string;
  commentedBy: number;
  commentedOn: string;
  commentedByDP?: string;
}

export class Like {
  count: number; // this should be a computed field
}
