import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppConfig } from '@config/app.config';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html'
})
export class HotelsComponent implements OnInit, OnDestroy {
  public destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public appConfig: AppConfig) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
