import { Component } from '@angular/core';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-map-tarija',
  standalone: true,
  imports: [],
  templateUrl: './map-tarija.component.html',
  styleUrl: './map-tarija.component.scss'
})
export class MapTarijaComponent {
  map_tarija: any
  layer_tarija: any
  map: any

  constructor(private data: DataService) {}

  ngOnInit(): void{
    this.getMap()
    this.getTarija()
  }

  getTarija(){
    this.data.getTarija().subscribe(
      json => {
        this.map_tarija = json
        this.layer_tarija = L.geojson(this.map_tarija).addTo(this.map)
      }
    )
  }

  getMap()[
    this.map = L.map('map').setView()
  ]
}
