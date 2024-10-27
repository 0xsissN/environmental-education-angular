import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { VideosComponent } from './videos/videos.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "contact", component: ContactComponent},
    {path: "", redirectTo: "/contact", pathMatch: "full"},
    {path: "videos", component: VideosComponent},
    {path: "", redirectTo: "/videos", pathMatch: "full"},
    {path: "biodiversity", loadChildren: () => import('./biodiversity/biodiversity.routes')},
    {path: "auth", loadChildren: () => import('./auth/features/auth.routes')}
];
