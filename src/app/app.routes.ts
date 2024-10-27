import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { ContactComponent } from './contact/contact.component';
import { EcosystemsComponent } from './ecosystems/ecosystems.component';
import { FloraComponent } from './flora/flora.component';
import { FaunaComponent } from './fauna/fauna.component';
import { SpeciesComponent } from './species/species.component';
import { WaterResourcesComponent } from './water-resources/water-resources.component';
import { VideosComponent } from './videos/videos.component';

export const routes: Routes = [
    {path: "inicio", component: HomeComponent},
    {path: "", redirectTo: "/inicio", pathMatch: "full"},
    {path: "biodiversidad", component: InformationComponent},
    {path: "", redirectTo: "/biodiversidad", pathMatch: "full"},
    {path: "contactanos", component: ContactComponent},
    {path: "", redirectTo: "/contactanos", pathMatch: "full"},
    {path: "videos", component: VideosComponent},
    {path: "", redirectTo: "/videos", pathMatch: "full"},
    {path: "ecosistemas", component: EcosystemsComponent},
    {path: "", redirectTo: "/ecosistemas", pathMatch: "full"},
    {path: "flora", component: FloraComponent},
    {path: "", redirectTo: "/flora", pathMatch: "full"},
    {path: "fauna", component: FaunaComponent},
    {path: "", redirectTo: "/fauna", pathMatch: "full"},
    {path: "especies", component: SpeciesComponent},
    {path: "", redirectTo: "/especies", pathMatch: "full"},
    {path: "hidricos", component: WaterResourcesComponent},
    {path: "", redirectTo: "/hidricos", pathMatch: "full"}
];
