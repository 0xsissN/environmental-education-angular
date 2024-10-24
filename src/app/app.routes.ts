import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "information", component: InformationComponent},
    {path: "", redirectTo: "/information", pathMatch: "full"},
    {path: "contact", component: ContactComponent},
    {path: "", redirectTo: "/contact", pathMatch: "full"},
];
