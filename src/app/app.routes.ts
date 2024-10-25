import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { ContactComponent } from './contact/contact.component';
import { EcosystemsComponent } from './ecosystems/ecosystems.component';
import { FloraComponent } from './flora/flora.component';
import { FaunaComponent } from './fauna/fauna.component';
import { SpeciesComponent } from './species/species.component';
import { WaterResourcesComponent } from './water-resources/water-resources.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "information", component: InformationComponent},
    {path: "", redirectTo: "/information", pathMatch: "full"},
    {path: "contact", component: ContactComponent},
    {path: "", redirectTo: "/contact", pathMatch: "full"},
    {path: "ecosystems", component: EcosystemsComponent},
    {path: "", redirectTo: "/ecosystems", pathMatch: "full"},
    {path: "flora", component: FloraComponent},
    {path: "", redirectTo: "/flora", pathMatch: "full"},
    {path: "fauna", component: FaunaComponent},
    {path: "", redirectTo: "/fauna", pathMatch: "full"},
    {path: "species", component: SpeciesComponent},
    {path: "", redirectTo: "/species", pathMatch: "full"},
    {path: "water", component: WaterResourcesComponent},
    {path: "", redirectTo: "/water", pathMatch: "full"}
];
