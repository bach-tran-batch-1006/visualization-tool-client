import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VisualizationEditComponent } from './visualization-edit.component';
import { Visualization } from '../models/Visualization';
import { VisualizationService } from '../services/visualization.service';
import { of } from 'rxjs';
import { CurriculumService } from '../services/curriculum.service';
import { Curriculum } from '../models/Curriculum';

describe('VisualizationEditComponent', () => {
  let component: VisualizationEditComponent;
  let fixture: ComponentFixture<VisualizationEditComponent>;
  const list: Visualization[] = [];
  const testcurriculum : Curriculum = {curriculumId: 1, curriculumName: 'TestCurriculum 1', skillList: [], isActive: true}; 
  const testvisualization: Visualization = {
      visualizationId: 1,
      visualizationName: 'Microsoft Azure',
      curriculumList: [],
    };

  
  list.push(testvisualization);
    

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
    csService.getAllCurriculum.and.returnValue(of(list[0].curriculumList));
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
    expect(component.curriculumList).toEqual(list[0].curriculumList);

  });




});

