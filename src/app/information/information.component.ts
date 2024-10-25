import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { CardSectionComponent } from '../shared/components/card-section/card-section.component';
import { IntroService } from '../core/services/intro.service';
import { CarouselImgComponent } from '../shared/components/carousel-img/carousel-img.component';
import { CarouselService } from '../core/services/carousel.service';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardSectionComponent, CarouselImgComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss'
})
export class InformationComponent implements OnInit {
  introData: any[] = []
  carouselData: any[] = []
  constructor(private introService: IntroService, private carouselService: CarouselService) { }

  ngOnInit() {
    this.introService.getIntro().subscribe(
      data => this.introData = data
    )

    this.carouselService.getCarousel().subscribe(
      data => this.carouselData = data
    )
  }
}
