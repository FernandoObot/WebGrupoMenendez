import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Presentacion } from './presentacion/presentacion';
import { SobreNosotros } from './sobre-nosotros/sobre-nosotros';
import { Servicios } from './servicios/servicios';
import { ProyectosDestacados } from './proyectos-destacados/proyectos-destacados';

@Component({
  imports: [RouterOutlet, Navbar, Footer, Presentacion, SobreNosotros, Servicios, ProyectosDestacados],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('GrupoMenendez');
}
