import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CardSectionComponent } from '../../shared/components/card-section/card-section.component';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-fauna',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardSectionComponent],
  templateUrl: './fauna.component.html',
  styleUrl: './fauna.component.scss',
})
export default class FaunaComponent implements OnInit {
  sectionsData: any[] = [];

  dataService = inject(DataService);

  ngOnInit() {
    this.dataService.getFauna().subscribe((data) => (this.sectionsData = data));
  }
}
