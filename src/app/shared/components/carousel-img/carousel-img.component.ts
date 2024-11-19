import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Carousel {
  title: string,
  images: {
    url: string,
    alt: string
  }[],
  link: string
}

@Component({
  selector: 'app-carousel-img',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carousel-img.component.html',
  styleUrl: './carousel-img.component.scss'
})
export class CarouselImgComponent {
  @Input() carousel: Carousel[] = []
}
