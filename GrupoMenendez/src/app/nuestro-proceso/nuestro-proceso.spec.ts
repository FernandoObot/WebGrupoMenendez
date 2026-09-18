import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuestroProceso } from './nuestro-proceso';

describe('NuestroProceso', () => {
  let component: NuestroProceso;
  let fixture: ComponentFixture<NuestroProceso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestroProceso],
    }).compileComponents();

    fixture = TestBed.createComponent(NuestroProceso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
