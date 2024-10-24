import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class IntroService{
    constructor(private http: HttpClient){}
    getIntro(): Observable<any[]>{
        return this.http.get<any[]>('assets/db/intro.json')
    }
}