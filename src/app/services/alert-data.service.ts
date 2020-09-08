import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertDataService {

  public subject = new BehaviorSubject<string>('');

  publishAlertObservable(message: string): void {
    this.subject.next(message);
  }

  subscribeAlertObservable(): Observable<string> {
    return this.subject.asObservable();
  }

  debounce(): void {

  }

}
