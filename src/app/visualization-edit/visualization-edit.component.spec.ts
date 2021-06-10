import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VisualizationEditComponent } from './visualization-edit.component';
import { Visualization, VisualizationDTO } from '../models/Visualization';
import { VisualizationService } from '../services/visualization.service';
import { of } from 'rxjs';
import { CurriculumService } from '../services/curriculum.service';
import { Curriculum } from '../models/Curriculum';

describe('VisualizationEditComponent', () => {
  let component: VisualizationEditComponent;
  let fixture: ComponentFixture<VisualizationEditComponent>;

  const testCurriculumList: Curriculum[] = [];
  const testCurriculum1 : Curriculum = {
    curriculumId: 1,
    curriculumName: 'TestCurriculum 1',
    skillList: [],
    isActive: true
  };
  const testCurriculum2 : Curriculum = {
    curriculumId: 2,
    curriculumName: 'TestCurriculum 2',
    skillList: [],
    isActive: true
  };
  testCurriculumList.push(testCurriculum1);
  testCurriculumList.push(testCurriculum2);

  const list: Visualization[] = [];
  const testVisualization: Visualization = {
    visualizationId: 1,
    visualizationName: 'Microsoft Azure',
    curriculumList: [],
  };
  list.push(testVisualization);

  const testVisualizationDTO: VisualizationDTO = {
    title: 'Microsoft Azure',
    curricula: []
  };
    

  beforeEach(async () => {
    const vsService = jasmine.createSpyObj('VisualizationService', [
      'getAllVisualizations', 'getVisualizationById', ' addVisualization', 'updateVisualization', 'deleteVisualization' 
      , 'getAllUniqueSkillsByVisualization', 'getAllUniqueCategoriesByVisualization'
  ]);


  const csService = jasmine.createSpyObj('CurriculumService', ['getAllCurriculum']);

    await TestBed.configureTestingModule({
      declarations: [ VisualizationEditComponent ],
      imports: [HttpClientTestingModule],
      providers: [VisualizationEditComponent, {provide: VisualizationService, useValue: vsService}, 
      {provide: CurriculumService, useValue: csService} ],
    })
    .compileComponents();
    vsService.getAllVisualizations.and.returnValue(of(list));
    csService.getAllCurriculum.and.returnValue(of(testCurriculumList));
    vsService.addVisualization(testVisualizationDTO).and.returnValue(of(testVisualization));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all visualization', () => {
    
    component.getAllVisualization();
    fixture.detectChanges();
    expect(component.visualizationList).toEqual(list);

  });
  //
  it('should get all curriculum', () => {
    
    component.getAllCurriculum();
    fixture.detectChanges();
    expect(component.curriculumList).toEqual(testCurriculumList);

  });
  //
  it('should get add new visualization', () => {
    component.getAllCurriculum();
    fixture.detectChanges();
    component.curriculumList[0].isActive = true;
    component.addVisualization();

    // fixture.detectChanges();
    // expect(component.curriculumList).toEqual(testCurriculumList);
    expect(component.getAllVisualization()).toHaveBeenCalled();
    // expect(component.resetCurriculumActive()).toHaveBeenCalled();

  });




});

