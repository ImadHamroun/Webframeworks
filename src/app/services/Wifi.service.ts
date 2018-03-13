import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";

@Injectable()
export class WifiService {
    constructor(private _http: HttpClient) { }

    getFreeWifiData(): Observable<Iresult> {
        return this._http.get<Iresult>("http://datasets.antwerpen.be/v4/gis/wifiopenbaar.json")
        // .do(data => { console.log(JSON.stringify(data)) });
    }
    
    


}

export interface Paging {
    records: number;
    pages: number;
    pageCurrent: number;
    pageNext?: any;
    pagePrev?: any;
    pageSize: number;
}

export interface Datum {
    id: number;
    objectid: number;
    point_lat: string;
    point_lng: string;
    id_wifi: string;
    klant: string;
    locatie: string;
    straat: string;
    huisnr: string;
    postcode: string;
    gemeente: string;
    huidige_dekking: string;
    private: string;
    private_mobile: string;
    wifi_balie: string;
    lokale_wifi: string;
    museumtracker: string;
    wireless_scholen?: any;
    zb_alarm?: any;
    bewoner?: any;
    stad_gratis_wifi: string;
    stad_gratis_wifi_citymesh: string;
    aanvraag_uitbreiding: string;
    geraamd_budget: string;
    timing: string;
    opmerking?: any;
    shape?: any;
  afstandKM:string;
}

export interface Iresult {
    paging: Paging;
    data: Datum[];
}