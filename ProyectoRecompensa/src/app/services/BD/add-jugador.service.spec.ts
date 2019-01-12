import { TestBed } from '@angular/core/testing';

import { AddJugadorService } from './add-jugador.service';

describe('AddJugadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddJugadorService = TestBed.get(AddJugadorService);
    expect(service).toBeTruthy();
  });
});
