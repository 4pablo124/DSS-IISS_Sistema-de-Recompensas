import { TestBed } from '@angular/core/testing';

import { DlcService } from './dlc.service';

describe('DlcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DlcService = TestBed.get(DlcService);
    expect(service).toBeTruthy();
  });
});
