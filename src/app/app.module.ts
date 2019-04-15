import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '@app/app.component';
import { HotelsService } from '@app/core/services/hotels.services';
import { MaterialAppModule } from '@app/material.module';
import { AppConfig } from '@config/app.config';
import { GeneralsService } from '@core/services/generals.service';
import { HotelsComponent } from '@modules/hotels/hotels.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AppComponent, HotelsComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MaterialAppModule,
    SharedModule
  ],
  providers: [AppConfig, GeneralsService, HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
