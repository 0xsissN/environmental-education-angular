import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CardSectionComponent } from '../../shared/components/card-section/card-section.component';
import { CarouselImgComponent } from '../../shared/components/carousel-img/carousel-img.component';
import { DataService } from '../../core/services/data.service';
import { SearchComponent } from '../../shared/components/search/search.component';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardSectionComponent, CarouselImgComponent, SearchComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss'
})
export default class InformationComponent implements OnInit {
  introData: any[] = []
  carouselData: any[] = []
  
  dataService = inject(DataService);

  ngOnInit() {
    this.dataService.getIntro().subscribe(
      data => this.introData = data
    )

    this.dataService.getCarousel().subscribe(
      data => this.carouselData = data
    )
  }
}
