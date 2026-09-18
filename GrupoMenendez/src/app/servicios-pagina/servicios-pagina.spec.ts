import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiciosPagina } from './servicios-pagina';

describe('ServiciosPagina', () => {
  let component: ServiciosPagina;
  let fixture: ComponentFixture<ServiciosPagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosPagina],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiciosPagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
