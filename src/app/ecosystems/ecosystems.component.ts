import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { CardSectionComponent } from '../shared/components/card-section/card-section.component';
import { EcosystemService } from '../core/services/ecosystem.service';

@Component({
  selector: 'app-ecosystems',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardSectionComponent],
  templateUrl: './ecosystems.component.html',
  styleUrl: './ecosystems.component.scss'
})
export class EcosystemsComponent implements OnInit {
  sectionsData: any[] = []
  constructor(private ecosystemService: EcosystemService) { }
  ngOnInit() {
    this.ecosystemService.getEcosystem().subscribe(
      data => this.sectionsData = data
    )
  }
}
