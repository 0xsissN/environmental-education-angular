import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import * as L from "leaflet"

@Component({
  selector: 'app-map-tarija',
  standalone: true,
  imports: [],
  templateUrl: './map-tarija.component.html',
  styleUrl: './map-tarija.component.scss'
})

export class MapTarijaComponent implements OnInit {
  map_tarija: any
  layer_tarija: any
  map: any

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getMap()
    this.getTarija()
  }

  getTarija() {
    this.data.getTarija().subscribe(
      json => {
        this.map_tarija = json
        this.layer_tarija = L.geoJSON(this.map_tarija).addTo(this.map)
      }
    )
  }

  getMap() {
    this.map = L.map('map').setView([-21.538541, -64.733063], 19);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
    let marker = L.marker([-21.538541, -64.733063]).addTo(this.map);
  }
}
