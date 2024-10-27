import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CardSectionComponent } from '../../shared/components/card-section/card-section.component';
import { WaterService } from '../../core/services/water.service';

@Component({
  selector: 'app-water-resources',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardSectionComponent],
  templateUrl: './water-resources.component.html',
  styleUrl: './water-resources.component.scss'
})
export default class WaterResourcesComponent implements OnInit {
  sectionsData: any[] = []
  constructor(private waterService: WaterService) { }
  ngOnInit() {
    this.waterService.getWater().subscribe(
      data => this.sectionsData = data
    )
  }
}
