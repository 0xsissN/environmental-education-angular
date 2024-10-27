import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { VideosComponent } from './videos/videos.component';
import { privateGuard, publicGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "contact", component: ContactComponent },
    { path: "videos", component: VideosComponent, canActivate: [privateGuard()] },
    { path: "biodiversity", loadChildren: () => import('./biodiversity/biodiversity.routes') },
    { path: "auth", loadChildren: () => import('./auth/features/auth.routes'), canActivateChild: [publicGuard()] },
    { path: "", redirectTo: "/home", pathMatch: "full" }
];
