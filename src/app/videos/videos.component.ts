import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { VideoService } from '../core/services/videos.service';
import { CardVideoSectionComponent } from '../shared/components/card-video-section/card-video-section.component';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardVideoSectionComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  sectionsData: any[] = []
  constructor(private videoService: VideoService) { }
  ngOnInit() {
    this.videoService.getVideos().subscribe(
      data => this.sectionsData = data
    )
  }
}
