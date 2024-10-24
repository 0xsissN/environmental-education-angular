import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MapTarijaComponent } from '../shared/components/map-tarija/map-tarija.component';
import { CardSectionComponent } from '../shared/components/card-section/card-section.component';
import { HomeService } from '../core/services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MapTarijaComponent, CardSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  sectionsData: any[] = []
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getSections().subscribe(
      data => this.sectionsData = data
    )
  }
}
