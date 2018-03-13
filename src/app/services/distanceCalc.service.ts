import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";

@Injectable()
export class distanceCalc {
    constructor(private _http: HttpClient) { }

    getDistanceData(latitude:number,longtitude:number,DESTlatitude:string,mode:string): Observable<IRes> {
        
        return this._http.get<IRes>(`http://maps.googleapis.com/maps/api/distancematrix/json?origins=${latitude},${longtitude}&destinations=${DESTlatitude}&mode=${mode}&language=en-EN&sensor=false`)
        // .do(data => { console.log(JSON.stringify(data)) });
    }
    
    


}
    
        export interface Distance {
            text: string;
            value: number;
        }
    
        export interface Duration {
            text: string;
            value: number;
        }
    
        export interface Element {
            distance: Distance;
            duration: Duration;
            status: string;
        }
    
        export interface Row {
            elements: Element[];
        }
    
        export interface IRes {
            destination_addresses: string[];
            origin_addresses: string[];
            rows: Row[];
            status: string;
        }
    
    
    
    