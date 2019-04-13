import { HotelService } from '@core/services/hotel.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private hotelService: HotelService) {}

  title = 'app';

  ngOnInit() {
    this.hotelService.getData().subscribe(result => {
      console.log(result);
    });
  }
}
