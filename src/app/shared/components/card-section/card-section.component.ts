import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

interface Section{
  title: string,
  content: string,
  imageUrl: string
}

@Component({
  selector: 'app-card-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card-section.component.html',
  styleUrl: './card-section.component.scss'
})
export class CardSectionComponent {
  @Input() sections: Section[] = []
}
