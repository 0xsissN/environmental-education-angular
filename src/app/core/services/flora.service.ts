import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FloraService {
    floraUrl: string = 'assets/db/information_flora.json'
    constructor(private http: HttpClient) { }
    getFlora(): Observable<any[]> {
        return this.http.get<any[]>(this.floraUrl)
    }
}