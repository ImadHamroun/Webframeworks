import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome/welcome.component';

import { RouterModule } from "@angular/router";

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { OpenbareWifiPlekkenComponent } from './openbare-wifi-plekken/openbare-wifi-plekken.component';
import { WifiService } from './services/Wifi.service';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

import { AgmCoreModule } from '@agm/core';
import { NearestFreeWifiComponent } from './nearest-free-wifi/nearest-free-wifi.component';
import { distanceCalc } from './services/distanceCalc.service';
import { SearchWifiComponent } from './search-wifi/search-wifi.component';
@NgModule({
  declarations: [
    AppComponent,
   
    WelcomeComponent,
  
    PageNotFoundComponent,
    NavBarComponent,
  
    OpenbareWifiPlekkenComponent,
    GoogleMapsComponent,
    NearestFreeWifiComponent,
    SearchWifiComponent
  ],
  imports: [
    AgmCoreModule.forRoot({apiKey:"AIzaSyBL9JqP0eewziy9sIEbOLEnzjW9zZ6l9cA",
    libraries:["places"]
  }),
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: WelcomeComponent},
      { path: 'AllFreeWifi', component: OpenbareWifiPlekkenComponent},
      { path: 'NearestFreeWifi', component: NearestFreeWifiComponent},
      
      { path: 'SearchWifi', component: SearchWifiComponent},
      { path: 'ShowMaps', component: GoogleMapsComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: "**", component: PageNotFoundComponent}
    ], { useHash: true }),
    FormsModule,
   ReactiveFormsModule,
    HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
  
    WifiService,
    distanceCalc
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
