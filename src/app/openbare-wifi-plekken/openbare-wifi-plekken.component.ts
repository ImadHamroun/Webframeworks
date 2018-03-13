import { Component, OnInit } from '@angular/core';
import { WifiService, Iresult } from '../services/Wifi.service';

@Component({
  selector: 'app-openbare-wifi-plekken',
  templateUrl: './openbare-wifi-plekken.component.html',
  styleUrls: ['./openbare-wifi-plekken.component.scss']
})
export class OpenbareWifiPlekkenComponent implements OnInit {

  Results:Iresult;


  constructor(private _SVC:WifiService) { }

  ngOnInit() {

    this._SVC.getFreeWifiData().subscribe(result => this.Results = result );

  }

}
