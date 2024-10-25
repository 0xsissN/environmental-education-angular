import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class WaterService {
    waterUrl: string = 'assets/db/information_water.json'
    constructor(private http: HttpClient) { }
    getWater(): Observable<any[]> {
        return this.http.get<any[]>(this.waterUrl)
    }
}