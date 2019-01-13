import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresVideojuego100Component } from './jugadores-videojuego100.component';

describe('JugadoresVideojuego100Component', () => {
  let component: JugadoresVideojuego100Component;
  let fixture: ComponentFixture<JugadoresVideojuego100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadoresVideojuego100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadoresVideojuego100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
