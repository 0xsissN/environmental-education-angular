import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EcosystemService {
    ecosystemUrl: string = 'assets/db/information_ecosystem.json'
    constructor(private http: HttpClient) { }
    getEcosystem(): Observable<any[]> {
        return this.http.get<any[]>(this.ecosystemUrl)
    }
}