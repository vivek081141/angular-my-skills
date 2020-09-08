import {Feed} from './Feed';

export class User {
  userName: string;
  displayProfile: string;
  feeds?: Feed[] = [];
}
