import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    private words = [
        'Ecosistemas Principales', 
        'Bosque Tucumano',
        'Valles Secos Interandinos',
        'Flora',
        'Flor Azucena',
        'Flor Dalias',
        'Flor Jazmín',
        'Flor Violeta',
        'Fauna',
        'Flamenco',
        'Jaguar',
        'Pecarí',
        'Especies Amenazadas y Endémicas',
        'Especie Jucumari',
        'Especie Mono Silbador',
        'Especie Quirquincho',
        'Recursos Hídricos',
        'Río Bermejo',
        'Río Grande',
        'Río Pilcomayo'
    ]

    search(query: string) {
        return this.words.filter(word =>
            word.toLowerCase().includes(query.toLowerCase())
        );
    }
}