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
      { skillId: 2, skillName: 'TestSkill2', category: expectedCategories[1], isActive: false, color: '#FF5733' },
      { skillId: 3, skillName: 'TestSkill3', category: expectedCategories[2], isActive: false, color: '#FF5733' }
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

  it('should add a skill', () => {
    component.skillNameAdd = 'New Skill';
    component.selectedCategory = {
      categoryId: 3, categoryName: 'TestCategory3',
      categoryDescription: 'Testing this Category 3', categoryColor: '#265733'
    };

    const expected = { skillId: 1, skillName: 'New Skill', category: expectedCategories[2], isActive: false, color: '#FF5733' };

    spyOn(mockSkillService, 'addSkill').and.returnValue(of(expected));

    const actual = component.addSkill();

    expect(actual).toEqual(expected);
  });

  it('should update a skill', () => {
    component.selectedSkill = { skillId: 1, skillName: 'TestSkill1', category: expectedCategories[0], isActive: false, color: '#FF5733' };
    component.skillNameUpdate = 'Update Skill';
    component.selectedCategory = {
      categoryId: 1, categoryName: 'TestCategory1',
      categoryDescription: 'Testing this Category 1', categoryColor: '#FF5733'
    };

    const skillDTO = { name: component.skillNameUpdate, category: component.selectedCategory };
    const expected = { skillId: 1, skillName: 'Update Skill', category: expectedCategories[0], isActive: false, color: '#FF5733' };

    spyOn(mockSkillService, 'updateSkill').withArgs(component.selectedSkill.skillId, skillDTO).and.returnValue(of(expected));

    const actual = component.updateSkill();

    expect(actual).toEqual(expected);
  });

  it('should delete a skill', () => {
    component.selectedSkill = { skillId: 1, skillName: 'TestSkill1', category: expectedCategories[0], isActive: false, color: '#FF5733' };

    // mockSkillRadio
    const mockSkillRadio = document.createElement('input');
    mockSkillRadio.setAttribute('type', 'radio');
    document.getElementById = jasmine.createSpy('*<<skill_1>>*').and.returnValue(mockSkillRadio);
    // mockCategoryRadio
    const mockCategoryRadio = document.createElement('input');
    mockCategoryRadio.setAttribute('type', 'radio');
    document.getElementById = jasmine.createSpy('*<<category_1>>*').and.returnValue(mockCategoryRadio);

    spyOn(mockSkillService, 'deleteSkill').and.returnValue(of(1));

    const actual = component.deleteSkill();

    expect(actual).toEqual(1)
  });

  it('should add a category', () => {
    component.categoryNameAdd = 'Added Category';
    component.categoryDescriptionAdd = 'Some description';
    let eCat = { categoryId: 1, categoryName: 'Added Category', categoryDescription: 'Some description', categoryColor: '#FF5733' };

    spyOn(mockCategoryService, 'addCategory').and.returnValue(of(eCat));
    let aCat = component.addCategory();

    expect(aCat).toEqual(eCat);
  });

  it('should update a category', () => {
    component.selectedCategory = { categoryId: 1, categoryName: 'Old Category', categoryDescription: 'Old description', categoryColor: '#FF5733' };
    let expected = { categoryId: 1, categoryName: 'New Category', categoryDescription: 'New description', categoryColor: '#FF5733' };

    spyOn(mockCategoryService, 'updateCategory').and.returnValue(of(expected));

    let acat = component.updateCategory();

    expect(acat).toEqual(expected);
  });

  it('should delete a category', () => {
    component.selectedCategory = { categoryId: 1, categoryName: 'Category to delete', categoryDescription: 'Description', categoryColor: '#FF5733' };

    spyOn(mockCategoryService, 'deleteCategory').and.returnValue(of(1));

    let actual = component.deleteCategory();

    expect(actual).toEqual(1);
  });

  it('should show category delete fail', () => {
    component.selectedCategory = null;

    component.deleteCategory();

    expect(component.showCategoryDeleteFail).toBeTruthy();
  });
});
