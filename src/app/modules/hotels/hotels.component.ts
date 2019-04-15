import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppConfig } from '@config/app.config';
import { GeneralsService } from '@core/services/generals.service';
import { HotelsService } from '@core/services/hotels.services';
import { Hotel } from '@shared/interfaces/hotel';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html'
})
export class HotelsComponent implements OnInit, OnDestroy {
  public destroy$: Subject<boolean> = new Subject<boolean>();
  public hotelsList: Array<Hotel> = [];
  public hotelsFilter: Array<Hotel> = [];
  public loading = true;
  public assets = '/assets/images/';
  public starList = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  };

  constructor(
    public appConfig: AppConfig,
    public generalsService: GeneralsService,
    public hotelsService: HotelsService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  loadData() {
    this.hotelsService.getData().subscribe(result => {
      this.hotelsList = result;
      this.hotelsList.sort((a, b) => {
        return b.stars - a.stars;
      });
      this.hotelsFilter = this.hotelsList;
      this.loading = false;
    });
  }

  searchName(name: string) {
    if (name) {
      this.hotelsFilter = this.hotelsList.filter(hotels => {
        if (
          hotels.name
            .toLowerCase()
            .trim()
            .indexOf(name.toLowerCase().trim()) > 0
        ) {
          return true;
        }
      });
    } else {
      this.loadData();
    }
  }

  searchStar(star: number, event: any) {
    let all = 0;
    if (star === 0) {
      for (let i = 0; i <= 5; i++) {
        this.starList[i] = event.checked;
      }
    } else {
      this.starList[star] = event.checked;
      for (let i = 1; i <= 5; i++) {
        if (this.starList[i]) {
          all++;
        }
      }
      if (all === 5) {
        this.starList[0] = true;
      } else {
        this.starList[0] = false;
      }
    }

    if (this.starList[0] || all === 0) {
      this.loadData();
    } else {
      const newList = [];
      for (let i = 5; i >= 1; i--) {
        let list = [];
        if (this.starList[i]) {
          list = this.hotelsList.filter(hotels => {
            return hotels.stars === i;
          });
          for (let j = 0; j < list.length; j++) {
            newList.push(list[j]);
          }
          newList.concat(list);
        }
        this.hotelsFilter = newList;
      }
    }
  }
}
