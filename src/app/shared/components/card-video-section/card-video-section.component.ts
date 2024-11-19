import { Component, Input } from '@angular/core';

interface Section {
  title: string,
  description: string,
  imageUrl: string,
  videoUrl: string
}

@Component({
  selector: 'app-card-video-section',
  standalone: true,
  imports: [],
  templateUrl: './card-video-section.component.html',
  styleUrl: './card-video-section.component.scss'
})
export class CardVideoSectionComponent {
  @Input() videos: Section[] = []
}
