import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CarouselService {
    carouselUrl: string = 'assets/db/flora_fauna.json'
    constructor(private http: HttpClient) { }
    getCarousel(): Observable<any[]> {
        return this.http.get<any[]>(this.carouselUrl)
    }
}