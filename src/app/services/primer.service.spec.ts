import { TestBed } from '@angular/core/testing';

import { PrimerService } from './primer.service';

describe('PrimerService', () => {
  let service: PrimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
