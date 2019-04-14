import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '@app/app.component';
import { HotelsService } from '@app/core/services/hotels.services';
import { MaterialAppModule } from '@app/material.module';
import { AppConfig } from '@config/app.config';
import { HotelsComponent } from '@modules/hotels/hotels.component';
import { FilterComponent } from '@shared/components/filter/filter.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AppComponent, FilterComponent, HotelsComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MaterialAppModule,
    SharedModule
  ],
  providers: [AppConfig, HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
