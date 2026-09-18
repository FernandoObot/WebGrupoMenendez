import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: string;
  photo: string;
  title: string;
  cat: string;
  service: string;
  benefit: string;
}

const categories = ['Todos', 'Obra civil', 'Obra hidráulica', 'Urbanización', 'Obra eléctrica', 'Obra mecánica', 'Renta de maquinaria'];

const projects: Project[] = [
  { id: '1', photo: '1772852311587-329719989e2b', title: 'Pavimentación urbana integral', cat: 'Urbanización', service: 'Urbanización', benefit: 'Rehabilitación de 4.2 km de vialidades con mejora significativa en movilidad.' },
  { id: '2', photo: '1650551182991-b07558247564', title: 'Sistema de drenaje pluvial', cat: 'Obra hidráulica', service: 'Obra hidráulica', benefit: 'Eliminación de zonas de inundación en temporada de lluvias.' },
  { id: '3', photo: '1606340671662-27ee685dd111', title: 'Red de agua potable', cat: 'Obra hidráulica', service: 'Obra hidráulica', benefit: 'Cobertura de servicio para 1,200 familias en zona urbana.' },
  { id: '4', photo: '1527335988388-b40ee248d80c', title: 'Instalación eléctrica industrial', cat: 'Obra eléctrica', service: 'Obra eléctrica', benefit: 'Habilitación de planta industrial con capacidad de 5 MW.' },
  { id: '5', photo: '1788058539956-306a09fdceef', title: 'Movimiento de tierra y nivelación', cat: 'Renta de maquinaria', service: 'Renta de maquinaria', benefit: 'Remoción de 25,000 m³ en 3 semanas, 30% bajo presupuesto.' },
  { id: '6', photo: '1599707254554-027aeb4deacd', title: 'Urbanización residencial', cat: 'Urbanización', service: 'Urbanización', benefit: 'Infraestructura completa para desarrollo de 350 viviendas.' },
  { id: '7', photo: '1429497419816-9ca5cfb4571a', title: 'Edificio de oficinas corporativas', cat: 'Obra civil', service: 'Obra civil', benefit: 'Construcción de 8 niveles con estructura de concreto reforzado.' },
  { id: '8', photo: '1708117242652-25dc76c4b30c', title: 'Apertura de vialidad principal', cat: 'Obra civil', service: 'Obra civil', benefit: 'Nuevo eje vial de 6.8 km con servicios completos.' },
  { id: '9', photo: '1784454936095-28042e9b1652', title: 'Planta de tratamiento de aguas', cat: 'Obra mecánica', service: 'Obra mecánica', benefit: 'Tratamiento de 200 L/s para zona industrial.' },
];

const imgUrl = (id: string) => `https://images.unsplash.com/photo-${id}?w=800&h=600&fit=crop&auto=format&q=80`;

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {
  activeFilter = signal('Todos');

  get filtered(): Project[] {
    const f = this.activeFilter();
    return f === 'Todos' ? projects : projects.filter(p => p.cat === f);
  }

  setFilter(cat: string) {
    this.activeFilter.set(cat);
  }

  getCategories() {
    return categories;
  }

  imgUrl(id: string) {
    return imgUrl(id);
  }
}
