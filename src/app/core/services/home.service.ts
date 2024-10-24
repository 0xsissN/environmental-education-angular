import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HomeService{
    constructor(private http: HttpClient){}
    getSections(): Observable<any[]>{
        return this.http.get<any[]>('assets/db/home.json')
    }
}