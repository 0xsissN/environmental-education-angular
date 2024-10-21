import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    mapTarijaUrl: string = '../../assets/db/map-tarija.geojson'
    
    constructor(private http: HttpClient){ }

    getTarija(){
        return this.http.get(this.mapTarijaUrl)
    }
}