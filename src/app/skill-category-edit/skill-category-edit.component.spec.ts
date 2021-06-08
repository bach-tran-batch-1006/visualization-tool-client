import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SkillCategoryEditComponent } from './skill-category-edit.component';

describe('SkillCategoryEditComponent', () => {
  let component: SkillCategoryEditComponent;
  let fixture: ComponentFixture<SkillCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillCategoryEditComponent ],
      imports: [HttpClientTestingModule],
      providers: [SkillCategoryEditComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
