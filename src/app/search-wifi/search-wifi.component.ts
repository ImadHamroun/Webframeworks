import { Component, OnInit } from '@angular/core';
import { WifiService, Iresult, Datum } from '../services/Wifi.service';
import { debug } from 'util';

@Component({
  selector: 'app-search-wifi',
  templateUrl: './search-wifi.component.html',
  styleUrls: ['./search-wifi.component.scss']
})
export class SearchWifiComponent implements OnInit {
  Results:Iresult
  Res:Iresult
  
 index:number
  point_lat: string[] =[]
  point_lng: string[] =[]
  id_wifi: string[]=[]
  klant: string[] =[]
  show:number;
  
  gemeente: string[] =[]
  data: Datum[] = []
  
  stad_gratis_wifi: string[] =[]
  
  private _search: string = "";
  constructor(private _SVC:WifiService) { }
  
    ngOnInit() {
  
      this._SVC.getFreeWifiData().subscribe(result => this.Results = result );
        
    }
    get Search() {
      return this._search;
    }
  
    set Search(value: string) {
      this._search = value;
    /*  for(var i = 0; i < this.Results.data.length; i++){
     if(this.Results.data[i].gemeente == value){
        debugger
        this.id_wifi.push(this.Results.data[i].id_wifi);
        this.gemeente.push(this.Results.data[i].gemeente);
        this.point_lat.push(this.Results.data[i].point_lat);
        this.point_lng.push(this.Results.data[i].point_lng);
        this.stad_gratis_wifi.push(this.Results.data[i].stad_gratis_wifi);
        this.klant.push(this.Results.data[i].klant);
      
     }
      
      }*/
      this.data = [];
      this.index = 0;
      for(let i of this.Results.data){
        
        if(i.gemeente == value){
          debugger

             this.Results.data[this.index] = i;
              this.data[this.index] = i;
            // this.Res.data[1000] = i;
            // this.Res.data.push(i);

              debugger

              this.index++;
        }
        //else{i.gemeente = undefined;}
        
      }
      
     // this.show = this.index;
    }
   
  }
  