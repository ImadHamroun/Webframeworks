import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  imageUrl : string = "http://more-cliparts.net/images/kiKBGkM4T.jpg"
  
  constructor() { }

  ngOnInit() {
    
  }

  
}
