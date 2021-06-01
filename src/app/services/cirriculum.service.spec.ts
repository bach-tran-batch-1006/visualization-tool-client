import { TestBed } from '@angular/core/testing';

import { CirriculumService } from './cirriculum.service';

describe('CirriculumService', () => {
  let service: CirriculumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CirriculumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
