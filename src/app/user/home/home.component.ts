import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertDataService} from '../../services/alert-data.service';
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  alert: string;

  constructor(private alertService: AlertDataService) { }

  ngOnInit(): void {
    this.alertService.subscribeAlertObservable().subscribe(
      alert => this.alert = alert
    );
    this.alertService.subject.pipe(
      debounceTime(3000)
    ).subscribe(() => this.alert = '');
  }

  ngOnDestroy(): void {
    this.alertService.publishAlertObservable('');
  }

}
