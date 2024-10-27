import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CardSectionComponent } from '../../shared/components/card-section/card-section.component';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-flora',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardSectionComponent],
  templateUrl: './flora.component.html',
  styleUrl: './flora.component.scss'
})
export default class FloraComponent implements OnInit {
  sectionsData: any[] = []

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.dataService.getFlora().subscribe(
      data => this.sectionsData = data
    )
  }
}
