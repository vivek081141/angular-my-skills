import {User} from './User';

export class Feed {
  user: User;
  postedDate: string;
  header: string;
  shortDescription: string;
  comments?: Comment[];
  commentsCount?: number;
  likes?: Like[];
  likesCount?: number;
}


export class Comment {
  comment: string;
  commentedBy: string;
  commentedOn: string;
  commentedByDP?: string;
}

export class Like {
  count: number; // this should be a computed field
}
