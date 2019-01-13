import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresPorVideojuegoComponent } from './jugadores-por-videojuego.component';

describe('JugadoresPorVideojuegoComponent', () => {
  let component: JugadoresPorVideojuegoComponent;
  let fixture: ComponentFixture<JugadoresPorVideojuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadoresPorVideojuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadoresPorVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
