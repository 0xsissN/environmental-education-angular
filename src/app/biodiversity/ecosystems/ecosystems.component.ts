import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CardSectionComponent } from '../../shared/components/card-section/card-section.component';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-ecosystems',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardSectionComponent],
  templateUrl: './ecosystems.component.html',
  styleUrl: './ecosystems.component.scss'
})
export default class EcosystemsComponent implements OnInit {
  sectionsData: any[] = []

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.dataService.getEcosystem().subscribe(
      data => this.sectionsData = data
    )
  }
}
