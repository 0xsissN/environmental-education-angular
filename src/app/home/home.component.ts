import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MapTarijaComponent } from '../shared/components/map-tarija/map-tarija.component';
import { CardSectionComponent } from '../shared/components/card-section/card-section.component';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MapTarijaComponent, CardSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  sectionsData: any[] = []
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getSections().subscribe(
      data => this.sectionsData = data
    )
  }
}
