import { Component, inject } from '@angular/core';
import { SearchService } from '../../../core/services/search.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  query: string = '';
  results: string[] = [];

  searchService = inject(SearchService)
  router = inject(Router)
  
  searchItem() {
    if (this.query.trim() !== '') {
      this.results = this.searchService.search(this.query);
    } else {
      this.results = [];
    }
  }

  private ecosystem: string[] = [
    'Ecosistemas Principales',
    'Bosque Tucumano',
    'Valles Secos Interandinos',
  ];
  private flora: string[] = [
    'Flora',
    'Flor Azucena',
    'Flor Dalias',
    'Flor Jazmín',
    'Flor Violeta',
  ];
  private fauna: string[] = ['Fauna', 'Flamenco', 'Jaguar', 'Pecarí'];
  private species: string[] = [
    'Especies Amenazadas y Endémicas',
    'Especie Jucumari',
    'Especie Mono Silbador',
    'Especie Quirquincho',
  ];
  private river: string[] = [
    'Recursos Hídricos',
    'Río Bermejo',
    'Río Grande',
    'Río Pilcomayo',
  ];

  selectItem(item: string) {
    if (this.ecosystem.includes(item)) {
      this.router.navigateByUrl('/biodiversity/ecosystem');
    }
    if (this.flora.includes(item)) {
      this.router.navigateByUrl('/biodiversity/flora');
    }
    if (this.fauna.includes(item)) {
      this.router.navigateByUrl('/biodiversity/fauna');
    }
    if (this.species.includes(item)) {
      this.router.navigateByUrl('/biodiversity/species');
    }
    if (this.river.includes(item)) {
      this.router.navigateByUrl('/biodiversity/water-resource');
    }
  }
}
