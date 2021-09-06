import { TestBed } from '@angular/core/testing';

import { ProjectSaveService } from './project-save.service';

describe('ProjectSaveService', () => {
  let service: ProjectSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
