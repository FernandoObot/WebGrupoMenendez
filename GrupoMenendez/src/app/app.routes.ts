import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Nosotros } from './nosotros/nosotros';
import { ServiciosPagina } from './servicios-pagina/servicios-pagina';
import { Proyectos } from './proyectos/proyectos';
import { Contacto } from './contacto/contacto';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: Home },
  { path: 'nosotros', component: Nosotros },
  { path: 'servicios', component: ServiciosPagina },
  { path: 'proyectos', component: Proyectos },
  { path: 'contacto', component: Contacto },
];
