import {Feed} from './Feed';

export class User {
  username: string;
  displayProfile: string;
  feeds?: Feed[] = [];
}
