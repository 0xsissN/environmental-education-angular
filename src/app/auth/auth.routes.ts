import { Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

export const AUTH_ROUTES: Routes = [
    {path: 'register', component: RegisterComponent}, // Cuando vaya a la ruta se abrira el componente
    {path: 'login', component: LoginComponent}
]