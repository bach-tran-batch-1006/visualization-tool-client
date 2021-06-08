import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CurriculumEditComponent } from './curriculum-edit.component';

describe('CurriculumEditComponent', () => {
  let component: CurriculumEditComponent;
  let fixture: ComponentFixture<CurriculumEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumEditComponent ],
      imports: [HttpClientTestingModule],
      providers: [CurriculumEditComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
