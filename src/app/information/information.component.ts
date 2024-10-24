import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { CardSectionComponent } from '../shared/components/card-section/card-section.component';
import { IntroService } from '../core/services/intro.service';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardSectionComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss'
})
export class InformationComponent implements OnInit {
  introData: any[] = []
  constructor(private introService: IntroService) { }

  ngOnInit() {
    this.introService.getIntro().subscribe(
      data => this.introData = data
    )
  }
}
