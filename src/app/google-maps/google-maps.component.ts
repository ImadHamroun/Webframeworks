import { Component } from '@angular/core';
import { ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { WifiService, Iresult } from '../services/Wifi.service';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {

  public latitude: number[]=[];
  public longitude: number[]=[];
  public searchControl: FormControl;
  public zoom: number;
  public formatted_address: string;
  public Results:Iresult;
 
  public la:number;
  public lo:number;

   @ViewChild("search")
  public searchElementRef: ElementRef;

  

  constructor( private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private _svc:WifiService) {}

  ngOnInit() {
    
    this._svc.getFreeWifiData().subscribe(result =>{this.Results = result; this.Search()});
    this.zoom = 13;
  
 
  }
  
Search(){
  debugger
  for(var i = 0; i< this.Results.data.length; i++){
  this.latitude.push(Number(this.Results.data[i].point_lat));
  this.longitude.push(Number(this.Results.data[i].point_lng));
  }
 



}

Seble(index: number){
  debugger
  this.la = Number(this.Results.data[index].point_lat);
  this.lo = Number(this.Results.data[index].point_lng);
  this.formatted_address = this.Results.data[index].id_wifi;
  
}


  
}
