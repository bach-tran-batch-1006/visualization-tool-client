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

    expect(actual).toEqual(1);
  });

  it('should show skill delete fail', () => {
    component.selectedSkill = null;

    component.deleteSkill();

    expect(component.showSkillDeleteFail).toBeTruthy();
  });

  it('should add a category', () => {
    component.categoryNameAdd = 'Added Category';
    component.categoryDescriptionAdd = 'Some description';
    const eCat = { categoryId: 1, categoryName: 'Added Category', categoryDescription: 'Some description', categoryColor: '#FF5733' };

    spyOn(mockCategoryService, 'addCategory').and.returnValue(of(eCat));
    const aCat = component.addCategory();

    expect(aCat).toEqual(eCat);
  });

  it('should update a category', () => {
    component.selectedCategory = { categoryId: 1, categoryName: 'Old Category', categoryDescription: 'Old description', categoryColor: '#FF5733' };
    const expected = { categoryId: 1, categoryName: 'New Category', categoryDescription: 'New description', categoryColor: '#FF5733' };

    spyOn(mockCategoryService, 'updateCategory').and.returnValue(of(expected));

    const acat = component.updateCategory();

    expect(acat).toEqual(expected);
  });

  it('should delete a category', () => {
    component.selectedCategory = { categoryId: 1, categoryName: 'Category to delete', categoryDescription: 'Description', categoryColor: '#FF5733' };

    spyOn(mockCategoryService, 'deleteCategory').and.returnValue(of(1));

    const actual = component.deleteCategory();

    expect(actual).toEqual(1);
  });

  it('should show category delete fail', () => {
    component.selectedCategory = null;

    component.deleteCategory();

    expect(component.showCategoryDeleteFail).toBeTruthy();
  });

  it('should display category', () => {
    component.showCategoryDeleteFail = true;
    component.selectedCategory = expectedCategories[0];
    component.showUpdateCategory = false;
    component.showAddCategory = true;

    component.displayCategory();

    expect(component.showCategoryDeleteFail).toBeFalsy();
    expect(component.categoryName).toEqual(expectedCategories[0].categoryName);
    expect(component.categoryDescription).toEqual(expectedCategories[0].categoryDescription);
    expect(component.showUpdateCategory).toBeTruthy();
    expect(component.showAddCategory).toBeFalsy();
  });

  it('should toggle add category', () => {
    component.showCategoryDeleteFail = true;
    component.showAddCategory = true;
    component.showUpdateCategory = true;

    component.toggleAddCategory();

    expect(component.showCategoryDeleteFail).toBeFalsy();
    expect(component.showAddCategory).toBeFalsy();
    expect(component.showUpdateCategory).toBeFalsy();
  });

  it('should toggle update category', () => {
    component.showCategoryDeleteFail = true;
    component.showAddCategory = true;
    component.showUpdateCategory = true;

    component.toggleUpdateCategory();

    expect(component.showCategoryDeleteFail).toBeFalsy();
    expect(component.showAddCategory).toBeFalsy();
    expect(component.showUpdateCategory).toBeFalsy();
  });

  it('should clear category radio', () => {
    component.selectedCategory = expectedCategories[0];

    const mockCategoryRadio = document.createElement('input');
    mockCategoryRadio.setAttribute('type', 'radio');
    document.getElementById = jasmine.createSpy('*<<category_1>>*').and.returnValue(mockCategoryRadio);

    component.showAddSkill = true;
    component.showUpdateSkill = false;
    component.showSkillDeleteFail = true;

    component.clearCategoryRadio();

    expect(mockCategoryRadio.checked).toBeFalsy();
    expect(component.selectedCategory).toEqual(null);
    expect(component.categoryName).toEqual('');
    expect(component.categoryDescription).toEqual('');
  });

  it('should clear category radio for skill', () => {
    component.selectedSkill = expectedSkills[0];

    const mockCategoryRadio = document.createElement('input');
    mockCategoryRadio.setAttribute('type', 'radio');
    document.getElementById = jasmine.createSpy('*<<category_1>>*').and.returnValue(mockCategoryRadio);

    component.clearCategoryRadio();

    expect(mockCategoryRadio.checked).toBeFalsy();
  });

  it('should clear skill radio', () => {
    component.selectedSkill = expectedSkills[0];

    const mockSkillRadio = document.createElement('input');
    mockSkillRadio.setAttribute('type', 'radio');
    document.getElementById = jasmine.createSpy('*<<skill_1>>*').and.returnValue(mockSkillRadio);

    const mockCategoryRadio = document.createElement('input');
    mockCategoryRadio.setAttribute('type', 'radio');
    document.getElementById = jasmine.createSpy('*<<category_1>>*').and.returnValue(mockCategoryRadio);

    component.clearSkillRadio();

    expect(mockCategoryRadio.checked).toBeFalsy();
    expect(mockSkillRadio.checked).toBeFalsy();
    expect(component.selectedSkill).toEqual(null);
    expect(component.skillNameUpdate).toEqual('');
  });

  it('should toggle add skill', () => {
    component.showSkillDeleteFail = true;
    component.showAddSkill = true;
    component.showUpdateSkill = true;

    component.toggleAddSkill();

    expect(component.showSkillDeleteFail).toBeFalsy();
    expect(component.showAddSkill).toBeFalsy();
    expect(component.showUpdateSkill).toBeFalsy();
  });

  it('should toggle update skill', () => {
    component.showSkillDeleteFail = true;
    component.showAddSkill = true;
    component.showUpdateSkill = true;

    component.toggleUpdateSkill();

    expect(component.showSkillDeleteFail).toBeFalsy();
    expect(component.showAddSkill).toBeFalsy();
    expect(component.showUpdateSkill).toBeFalsy();
  });

  it('should toggle skill', () => {
    component.skillList = expectedSkills;

    component.toggleSkill(1);

    expect(component.skillList[0].isActive).toBeTruthy();
  });

  it('should display skill', () => {
    component.selectedSkill = expectedSkills[0];

    const mockCategoryRadio = document.createElement('input');
    mockCategoryRadio.setAttribute('type', 'radio');
    document.getElementById = jasmine.createSpy('*<<category_1>>*').and.returnValue(mockCategoryRadio);

    component.showAddSkill = true;
    component.showUpdateSkill = false;
    component.showSkillDeleteFail = true;

    component.displaySkill();

    expect(component.skillNameUpdate).toEqual(expectedSkills[0].skillName);
    expect(component.showAddSkill).toBeFalsy();
    expect(component.showUpdateSkill).toBeTruthy();
    expect(component.showSkillDeleteFail).toBeFalsy();
  });
});
