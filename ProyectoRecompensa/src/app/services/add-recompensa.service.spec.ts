import { TestBed } from '@angular/core/testing';

import { AddRecompensaService } from './add-recompensa.service';

describe('AddRecompensaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddRecompensaService = TestBed.get(AddRecompensaService);
    expect(service).toBeTruthy();
  });
});
