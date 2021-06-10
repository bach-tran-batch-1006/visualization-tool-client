import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SkillCategoryEditComponent } from './skill-category-edit.component';
import { Category, CategoryDTO } from '../models/Category';
import { Skill } from '../models/Skill';
import { CategoryService } from '../services/category.service';
import { SkillService } from '../services/skill.service';
import { Observable, of } from 'rxjs';

describe('SkillCategoryEditComponent', () => {
  let component: SkillCategoryEditComponent;
  let fixture: ComponentFixture<SkillCategoryEditComponent>;
  let mockCategoryService: CategoryService;
  let mockSkillService: SkillService;
  let expectedCategories: Category[];
  let expectedSkills: Skill[];

  beforeEach(async () => {
    expectedCategories = [
      { categoryId: 1, categoryName: 'TestCategory1', categoryDescription: 'Testing this Category 1', categoryColor: '#FF5733' },
      { categoryId: 2, categoryName: 'TestCategory2', categoryDescription: 'Testing this Category 2', categoryColor: '#335733' },
      { categoryId: 3, categoryName: 'TestCategory3', categoryDescription: 'Testing this Category 3', categoryColor: '#265733' }
    ];
    expectedSkills = [
      { skillId: 1, skillName: 'TestSkill1', category: expectedCategories[0], isActive: false, color: '#FF5733' },
      { skillId: 1, skillName: 'TestSkill1', category: expectedCategories[1], isActive: false, color: '#FF5733' },
      { skillId: 1, skillName: 'TestSkill1', category: expectedCategories[2], isActive: false, color: '#FF5733' }
    ];
    await TestBed.configureTestingModule({
      declarations: [SkillCategoryEditComponent],
      imports: [HttpClientTestingModule],
      providers: [SkillService, CategoryService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockCategoryService = TestBed.inject(CategoryService);
    mockSkillService = TestBed.inject(SkillService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all categories', () => {
    spyOn(mockCategoryService, 'getCategories').and.returnValue(of(expectedCategories));

    component.getAllCategories();

    expect(component.categoryList).toEqual(expectedCategories);
  });

  it('should get all skills', () => {
    spyOn(mockSkillService, 'getSkills').and.returnValue(of(expectedSkills));

    component.getAllSkills();

    expect(component.skillList).toEqual(expectedSkills);
  });
});
