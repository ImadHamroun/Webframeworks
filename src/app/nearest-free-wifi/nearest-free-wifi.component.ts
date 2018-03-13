import { Component, OnInit } from '@angular/core';
import { distanceCalc, IRes } from '../services/distanceCalc.service';
import { OpenbareWifiPlekkenComponent } from '../openbare-wifi-plekken/openbare-wifi-plekken.component';
import { WifiService, Iresult } from '../services/Wifi.service';

@Component({
  selector: 'app-nearest-free-wifi',
  templateUrl: './nearest-free-wifi.component.html',
  //styleUrls: ['./nearest-free-wifi.component.scss']
})
export class NearestFreeWifiComponent implements OnInit {

  constructor(private _svc:distanceCalc, private _svc2:WifiService) { }
  Latitude:number;
  Longtitude:number;
  lat: number;
  lon:number;
  Mode:string;
  Results: IRes;
  ResultsWifispots: Iresult
  
hallo:string= "";

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => { 
      console.log("Got position", position.coords);
      this.lat = position.coords.latitude; 
      this.lon = position.coords.longitude;
    });
    
    this._svc2.getFreeWifiData().subscribe(result => {this.ResultsWifispots = result; this.result();this.Search()});
    debugger
   
    
   }
 
  result(){

          
    
        for(var i = 0 ;i<this.ResultsWifispots.data.length;i++){
          debugger
          if(i ==0){
          this.hallo +=this.ResultsWifispots.data[i].point_lat+","+this.ResultsWifispots.data[i].point_lng;
          }
          else {this.hallo +="|"+this.ResultsWifispots.data[i].point_lat+","+this.ResultsWifispots.data[i].point_lng;}
        }

        console.log(this.hallo);
        
        
  
  }
   Search() {
   
    

    this._svc.getDistanceData(this.lat,this.lon,this.hallo,"driving").subscribe(result =>this.Results = result);
    

  
  }

}
