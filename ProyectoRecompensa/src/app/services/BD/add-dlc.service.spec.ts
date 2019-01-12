import { TestBed } from '@angular/core/testing';

import { AddDlcService } from './add-dlc.service';

describe('AddDlcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddDlcService = TestBed.get(AddDlcService);
    expect(service).toBeTruthy();
  });
});
