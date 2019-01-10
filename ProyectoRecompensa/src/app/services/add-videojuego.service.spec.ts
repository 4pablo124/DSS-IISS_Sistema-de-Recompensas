import { TestBed } from '@angular/core/testing';

import { AddVideojuegoService } from './add-videojuego.service';

describe('AddVideojuegoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddVideojuegoService = TestBed.get(AddVideojuegoService);
    expect(service).toBeTruthy();
  });
});
