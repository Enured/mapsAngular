import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MapaComponent } from './components/mapa/mapa.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'mapa', component: MapaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'mapa' },
    { path: '**', pathMatch: 'full', redirectTo: 'mapa' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);