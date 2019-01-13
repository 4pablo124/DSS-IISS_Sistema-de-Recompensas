import { TestBed } from '@angular/core/testing';

import { JugadorVideojuegoService } from './jugador-videojuego.service';

describe('JugadorVideojuegoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JugadorVideojuegoService = TestBed.get(JugadorVideojuegoService);
    expect(service).toBeTruthy();
  });
});
