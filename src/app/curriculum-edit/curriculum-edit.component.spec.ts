import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CurriculumEditComponent } from './curriculum-edit.component';
import { Curriculum, CurriculumDTO } from '../models/Curriculum';
import { CurriculumService } from '../services/curriculum.service';
import { of } from 'rxjs';
import { isRegExp } from 'util';
import { Skill } from '../models/Skill';
import { SkillService } from '../services/skill.service';

describe('CurriculumEditComponent', () => {
  let component: CurriculumEditComponent;
  let fixture: ComponentFixture<CurriculumEditComponent>;

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

  const testSkillList: Skill[] = [];
  const testSkill1: Skill = {
    skillId: 1,
    skillName: 'testSkill',
    category: {
      categoryId: 1,
      categoryName: 'testCategory',
      categoryDescription: '',
      categoryColor: ''
    },
    isActive: false,
    color: ''
  };
  const testSkill2: Skill = {
    skillId: 2,
    skillName: 'testSkill2',
    category: {
      categoryId: 1,
      categoryName: 'testCategory',
      categoryDescription: '',
      categoryColor: ''
    },
    isActive: true,
    color: ''
  };
  testSkillList.push(testSkill1);
  testSkillList.push(testSkill2);

  const testCurriculumDTO: CurriculumDTO = {
    name: 'testCurriculumDTO',
    skillList: []
  };

  beforeEach(async () => {
    const csService = jasmine.createSpyObj('CurriculumService',
    ['getAllCurriculum', 'addCurriculum', 'updateCurriculum', 'deleteCurriculum']);
    const skService = jasmine.createSpyObj('SkillService', ['getSkills']);
    await TestBed.configureTestingModule({
      declarations: [ CurriculumEditComponent ],
      imports: [HttpClientTestingModule],
      providers: [CurriculumEditComponent, { provide: CurriculumService, useValue: csService },
        { provide: SkillService, useValue: skService }],
    })
    .compileComponents();
    csService.getAllCurriculum.and.returnValue(of(testCurriculumList));
    skService.getSkills.and.returnValue(of(testSkillList));
    csService.addCurriculum.and.returnValue(of(testCurriculum1));
    csService.updateCurriculum.and.returnValue(of(testCurriculum1));
    csService.deleteCurriculum.and.returnValue(of(1));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all curricula', () => {
    component.getAllCurriculum();
    fixture.detectChanges();
    expect(component.curriculumList).toEqual(testCurriculumList);
  });

  it('should get all skills', () => {
    component.getAllSkills();
    fixture.detectChanges();
    expect(component.skillList).toEqual(testSkillList);
  });

  it('should get add new curriculum', () => {
    component.getAllSkills();
    fixture.detectChanges();
    component.skillList[0].isActive = true;
    component.curriculumNameUpdate = testCurriculumDTO.name;
    component.selectedSkillList = testCurriculumDTO.skillList;

    const returncu = component.addCurriculum();
    expect(returncu).toEqual(testCurriculum1);
  });

  it('should update curriculum', () => {
    component.getAllSkills();
    component.selectedCurriculum = testCurriculum1;
    fixture.detectChanges();
    component.curriculumList[0].isActive = true;
    const returncu = component.updateCurriculum();
    expect(returncu.curriculumId).toEqual(testCurriculum1.curriculumId);
  });

  it('should delete curriculum', () => {
    component.getAllSkills();
    component.selectedCurriculum = testCurriculum1;
    fixture.detectChanges();
    const result = component.deleteCurriculum();
    expect(result).toEqual(1);
  });

  it('should update current curriculum when displayCurriculum() runs', () => {
    component.getAllSkills();
    component.skillList = testSkillList;
    component.showAddCurriculum = true;
    component.showCurriculumDeleteFail = true;
    component.showUpdateCurriculum = false;
    component.selectedCurriculum = testCurriculum1;
    component.displayCurriculum();
    fixture.detectChanges();
    expect(component.showAddCurriculum).toBeFalse();
    expect(component.showCurriculumDeleteFail).toBeFalse();
    expect(component.showUpdateCurriculum).toBeTrue();
  });

  it('should toggle the current skill', () => {
    component.getAllSkills();
    component.skillList = testSkillList;
    component.toggleSkill(1);
    fixture.detectChanges();
    expect(testSkillList[0].isActive).toBeTrue();
    expect(testSkillList[1].isActive).toBeFalse();
  });

  it('should toggle add curriculum', () => {
    component.showCurriculumDeleteFail = true;
    component.showUpdateCurriculum = true;
    component.showAddCurriculum = true;
    component.toggleAddCurriculum();
    fixture.detectChanges();
    expect(component.showCurriculumDeleteFail).toBeFalse();
    expect(component.showUpdateCurriculum).toBeFalse();
    expect(component.showAddCurriculum).toBeFalse();
  });

  it('should toggle update curriculum', () => {
    component.showCurriculumDeleteFail = true;
    component.showAddCurriculum = true;
    component.showUpdateCurriculum = true;
    component.toggleUpdateCurriculum();
    fixture.detectChanges();
    expect(component.showCurriculumDeleteFail).toBeFalse();
    expect(component.showAddCurriculum).toBeFalse();
    expect(component.showUpdateCurriculum).toBeFalse();
  });
});
