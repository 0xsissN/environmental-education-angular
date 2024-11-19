import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  mapTarijaUrl: string = '../../assets/db/map-tarija.geojson';
  introUrl: string = 'assets/db/intro.json';
  homeUrl: string = 'assets/db/home.json';
  ecosystemUrl: string = 'assets/db/information_ecosystem.json';
  speciesUrl: string = 'assets/db/information_species.json';
  carouselUrl: string = 'assets/db/flora_fauna.json';
  floraUrl: string = 'assets/db/information_flora.json';
  faunaUrl: string = 'assets/db/information_fauna.json';
  waterUrl: string = 'assets/db/information_water.json';
  videosUrl: string = 'assets/db/video.json';

  http = inject(HttpClient);

  getTarija() {
    return this.http.get(this.mapTarijaUrl);
  }

  getIntro(): Observable<any[]> {
    return this.http.get<any[]>(this.introUrl);
  }

  getSections(): Observable<any[]> {
    return this.http.get<any[]>(this.homeUrl);
  }

  getEcosystem(): Observable<any[]> {
    return this.http.get<any[]>(this.ecosystemUrl);
  }

  getCarousel(): Observable<any[]> {
    return this.http.get<any[]>(this.carouselUrl);
  }

  getFauna(): Observable<any[]> {
    return this.http.get<any[]>(this.faunaUrl);
  }

  getFlora(): Observable<any[]> {
    return this.http.get<any[]>(this.floraUrl);
  }

  getSpecies(): Observable<any[]> {
    return this.http.get<any[]>(this.speciesUrl);
  }

  getVideos(): Observable<any[]> {
    return this.http.get<any[]>(this.videosUrl);
  }

  getWater(): Observable<any[]> {
    return this.http.get<any[]>(this.waterUrl);
  }
}
