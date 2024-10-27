import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CardSectionComponent } from '../../shared/components/card-section/card-section.component';
import { FaunaService } from '../../core/services/fauna.service';

@Component({
  selector: 'app-fauna',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardSectionComponent],
  templateUrl: './fauna.component.html',
  styleUrl: './fauna.component.scss'
})
export default class FaunaComponent implements OnInit {
  sectionsData: any[] = []
  constructor(private faunaService: FaunaService) { }
  ngOnInit() {
    this.faunaService.getFauna().subscribe(
      data => this.sectionsData = data
    )
  }
}
