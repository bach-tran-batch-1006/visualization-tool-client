import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumAddComponent } from './curriculum-add.component';

describe('CurriculumAddComponent', () => {
  let component: CurriculumAddComponent;
  let fixture: ComponentFixture<CurriculumAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
