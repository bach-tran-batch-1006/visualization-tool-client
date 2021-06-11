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
  const testCurriculum1: Curriculum = {
    curriculumId: 1,
    curriculumName: 'TestCurriculum 1',
    skillList: [],
    isActive: true
  };
  const testCurriculum2: Curriculum = {
    curriculumId: 2,
    curriculumName: 'TestCurriculum 2',
    skillList: [],
    isActive: true
  };
  const testCurriculum3: Curriculum = {
    curriculumId: 1,
    curriculumName: 'TestCurriculum 1',
    skillList: [],
    isActive: false
  };
  testCurriculumList.push(testCurriculum1);
  testCurriculumList.push(testCurriculum2);
  testCurriculumList.push(testCurriculum3);
  const list: Visualization[] = [];
  const testVisualization: Visualization = {
    visualizationId: 1,
    visualizationName: 'Microsoft Azure',
    curriculumList: testCurriculumList
  };
  list.push(testVisualization);

  const testVisualizationDTO: VisualizationDTO = {
    title: 'Microsoft Azure',
    curricula: []
  };
  beforeEach(async () => {
    const vsService = jasmine.createSpyObj('VisualizationService', [
      'getAllVisualizations', 'getVisualizationById', 'addVisualization', 'updateVisualization', 'deleteVisualization'
      , 'getAllUniqueSkillsByVisualization', 'getAllUniqueCategoriesByVisualization'
    ]);
    const csService = jasmine.createSpyObj('CurriculumService', ['getAllCurriculum']);
    await TestBed.configureTestingModule({
      declarations: [VisualizationEditComponent],
      imports: [HttpClientTestingModule],
      providers: [VisualizationEditComponent, { provide: VisualizationService, useValue: vsService },
        { provide: CurriculumService, useValue: csService }],
    })
      .compileComponents();
    vsService.getAllVisualizations.and.returnValue(of(list));
    vsService.updateVisualization.and.returnValue(of(list));
    csService.getAllCurriculum.and.returnValue(of(testCurriculumList));
    vsService.addVisualization.and.returnValue(of(testVisualization));
    vsService.deleteVisualization.and.returnValue(of(1));
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

  it('should get all curriculum', () => {

    component.getAllCurriculum();
    fixture.detectChanges();
    expect(component.curriculumList).toEqual(testCurriculumList);

  });

  it('should get add new visualization', () => {
    component.getAllCurriculum();
    fixture.detectChanges();
    component.curriculumList[0].isActive = true;
    component.visualizationNameUpdate = testVisualizationDTO.title;
    component.selectedCurriculumList = testVisualizationDTO.curricula;

    const returnvs = component.addVisualization();
    expect(returnvs).toEqual(testVisualization);
  });

  it('should update visualization', () => {
    component.getAllCurriculum();
    component.selectedVisualization = testVisualization;
    fixture.detectChanges();
    component.curriculumList[0].isActive = true;
    const returnvs = component.updateVisualization();
    expect(returnvs[0].visualizationId).toEqual(testVisualization.visualizationId);

  });


  it('should display visualization', () => {
    component.getAllVisualization();
    component.getAllCurriculum();
    component.selectedVisualization = testVisualization;
    component.curriculumList = testCurriculumList;
    fixture.detectChanges();
    component.curriculumList[0].isActive = true;
    component.displayVisualization();
    expect(component.visualizationNameUpdate).toEqual(testVisualization.visualizationName);
  });
  //
  it('should toggle curriculum', () => {
    component.getAllVisualization();
    component.getAllCurriculum();
    fixture.detectChanges();
    component.curriculumList[0].isActive = true;
    component.toggleCurriculum(component.curriculumList[0].curriculumId);
  });

  it('should reset curriculum', () => {
    component.getAllVisualization();
    component.getAllCurriculum();
    fixture.detectChanges();
    component.resetCurriculumActive();
    expect(component.selectedCurriculumList).toEqual([]);
  });

  it('should toggle visualization', () => {
    component.getAllVisualization();
    component.getAllCurriculum();
    fixture.detectChanges();
    component.toggleAddVisualization();
    expect(component.selectedCurriculumList).toEqual([]);
  });
  //
  it('should toggle updatevisualization', () => {
    component.getAllVisualization();
    component.getAllCurriculum();
    component.curriculumList = testCurriculumList;
    fixture.detectChanges();
    component.toggleUpdateVisualization();
    expect(component.showViewVisualizationFail).toEqual(false);
  });
  //

  it('should view edit visualization', () => {
    component.getAllVisualization();
    fixture.detectChanges();
    component.viewVisualization();

  });

  it('should delete visualization', () => {
    component.getAllVisualization();
    component.selectedVisualization = testVisualization;
    fixture.detectChanges();
    const result = component.deleteVisualization();
    expect(result).toEqual(1);

  });

  it('should delete visualization invalid', () => {
    component.getAllVisualization();
    fixture.detectChanges();
    const result = component.deleteVisualization();
    expect(result).toEqual(undefined);

  });

});

