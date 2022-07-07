import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelRegistrationComponent } from './travel-registration/travel-registration.component';
import { SearchPlaceComponent } from './search-place/search-place.component';
import { ViewDestinationComponent } from './view-destination/view-destination.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelRegistrationComponent,
    SearchPlaceComponent,
    ViewDestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
