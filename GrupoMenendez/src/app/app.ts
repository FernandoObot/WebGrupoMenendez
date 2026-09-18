import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Home } from './home/home';
import { Nosotros } from './nosotros/nosotros';
import { ServiciosPagina } from './servicios-pagina/servicios-pagina';
import { Proyectos } from './proyectos/proyectos';
import { Contacto } from './contacto/contacto';

@Component({
  imports: [RouterOutlet, Navbar, Footer, Home, Nosotros, ServiciosPagina, Proyectos, Contacto],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('GrupoMenendez');
}
