import { Component } from '@angular/core';
import { Presentacion } from '../presentacion/presentacion';
import { SobreNosotros } from '../sobre-nosotros/sobre-nosotros';
import { Servicios } from '../servicios/servicios';
import { ProyectosDestacados } from '../proyectos-destacados/proyectos-destacados';
import { NuestroProceso } from '../nuestro-proceso/nuestro-proceso';
import { CtaContacto } from '../cta-contacto/cta-contacto';

@Component({
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
  imports: [Presentacion, SobreNosotros, Servicios, ProyectosDestacados, NuestroProceso, CtaContacto],
})
export class Home {}
