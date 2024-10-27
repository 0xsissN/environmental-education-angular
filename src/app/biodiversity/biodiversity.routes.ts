import { Routes } from '@angular/router';

export default [
    {
        path: "information",
        loadComponent: () => import('./information/information.component')
    },
    {
        path: "ecosystem",
        loadComponent: () => import('./ecosystems/ecosystems.component')
    },
    {
        path: "flora",
        loadComponent: () => import('./flora/flora.component')
    },
    {
        path: "fauna",
        loadComponent: () => import('./fauna/fauna.component')
    },
    {
        path: "species",
        loadComponent: () => import('./species/species.component')
    },
    {
        path: "water-resource",
        loadComponent: () => import('./water-resources/water-resources.component')
    }
] as Routes