import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

import { VisualizationComponent } from './visualization.component';
import { VisualizationService } from '../services/visualization.service';
import { of } from 'rxjs';
import { Visualization } from '../models/Visualization';
import { Skill } from '../models/Skill';
import { Category } from '../models/Category';
import { Curriculum } from '../models/Curriculum';

describe('VisualizationComponent', () => {
  let component: VisualizationComponent;
  let fixture: ComponentFixture<VisualizationComponent>;

  const mockCategoryList: Category[] = [];
  const mockCategory: Category = {
    categoryId: 1,
    categoryName: 'mock category',
    categoryDescription: 'mock desc',
    categoryColor: ''
  };
  mockCategoryList.push(mockCategory);

  const mockSkillList: Skill[] = [];
  const mockSkill1: Skill = {
    skillId: 1,
    skillName: 'mock skill',
    category: mockCategory,
    isActive: false,
    color: ''
  };
  mockSkillList.push(mockSkill1);

  const mockCurriculumList: Curriculum[] = [];
  const mockCurriculum: Curriculum = {
    curriculumId: 1,
    curriculumName: 'mock curriculum',
    skillList: mockSkillList,
    isActive: false
  };
  mockCurriculumList.push(mockCurriculum);

  const mockVisualization: Visualization = {
    visualizationId: 1,
    visualizationName: 'Mock Visualization',
    curriculumList: mockCurriculumList
  };

  beforeEach(async () => {

    const visualizationService = jasmine.createSpyObj('VisualizationService', ['getVisualizationById', 'getAllUniqueSkillsByVisualization', 'getAllUniqueCategoriesByVisualization']);

    await TestBed.configureTestingModule({
      declarations: [ VisualizationComponent ],
      imports: [ RouterModule.forRoot([]), HttpClientModule, HttpClientTestingModule ],
      providers: [ VisualizationComponent,
        { provide: VisualizationService, useValue: visualizationService }
      ]
    })
    .compileComponents();

    visualizationService.getVisualizationById.and.returnValue(of(mockVisualization));
    visualizationService.getAllUniqueSkillsByVisualization.and.returnValue(of(mockSkillList));
    visualizationService.getAllUniqueCategoriesByVisualization.and.returnValue(of(mockCategoryList));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get current visualization by Id', () => {

    fixture.detectChanges();
    expect(component.currentVisualization).toEqual(mockVisualization);

  });

});
