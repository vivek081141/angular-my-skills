import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  public subject = new BehaviorSubject<string>('');

  publishEvent(message: string): void {
    this.subject.next(message);
  }

  subscribeEvent(): Observable<string> {
    return this.subject.asObservable();
  }

}
