import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Nosotros } from './nosotros/nosotros';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: Home },
  { path: 'nosotros', component: Nosotros },
];
