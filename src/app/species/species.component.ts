import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { CardSectionComponent } from '../shared/components/card-section/card-section.component';
import { SpeciesService } from '../core/services/species.service';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardSectionComponent],
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss'
})
export class SpeciesComponent implements OnInit {
  sectionsData: any[] = []
  constructor(private specieService: SpeciesService) { }
  ngOnInit() {
    this.specieService.getSpecies().subscribe(
      data => this.sectionsData = data
    )
  }
}
