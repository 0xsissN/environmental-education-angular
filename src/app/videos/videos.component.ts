import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { CardVideoSectionComponent } from '../shared/components/card-video-section/card-video-section.component';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardVideoSectionComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  sectionsData: any[] = []
  
  dataService = inject(DataService)

  ngOnInit() {
    this.dataService.getVideos().subscribe(
      data => this.sectionsData = data
    )
  }
}
