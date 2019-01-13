import { TestBed } from '@angular/core/testing';

import { JugadorRecompensaService } from './jugador-recompensa.service';

describe('JugadorRecompensaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JugadorRecompensaService = TestBed.get(JugadorRecompensaService);
    expect(service).toBeTruthy();
  });
});
