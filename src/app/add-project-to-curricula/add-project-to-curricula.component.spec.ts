import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectToCurriculaComponent } from './add-project-to-curricula.component';

describe('AddProjectToCurriculaComponent', () => {
  let component: AddProjectToCurriculaComponent;
  let fixture: ComponentFixture<AddProjectToCurriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectToCurriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectToCurriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
