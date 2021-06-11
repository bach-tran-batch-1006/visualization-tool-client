import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { doesNotReject } from 'assert';
import { emit } from 'process';
import { By } from 'protractor';

import { CurriculumComponent } from './curriculum.component';

describe('CurriculumComponent', () => {
  let component: CurriculumComponent;
  let mockCurriculumService;
  let Curricula;
  let currentSkillList;
  let currentCategory;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ CurriculumComponent ]
    });

    currentCategory = { categoryID: 1, categoryName: 'TestCategory1', categoryDescription: 'Testing this Category 1', categoryColor: '#FF5733' };

    currentSkillList = [
      {skillId: 1, skillName: 'TestSkill1', category: currentCategory, isActive: true, color: 'FF5733'},
      {skillId: 2, skillName: 'TestSkill2', category: currentCategory, isActive: true, color: 'FF5733'},
      {skillId: 3, skillName: 'TestSkill3', category: currentCategory, isActive: true, color: 'FF5733'}
    ];

    Curricula = [
      {curriculumId: 1, curriculumName: 'TestCurriculum 1', skillList: currentSkillList, isActive: true},
      {curriculumId: 2, curriculumName: 'TestCurriculum 2', skillList: currentSkillList, isActive: true},
      {curriculumId: 3, curriculumName: 'TestCurriculum 3', skillList: currentSkillList, isActive: true}
    ];

    fixture = TestBed.createComponent(CurriculumComponent);
    fixture.detectChanges();
    component = new CurriculumComponent();
    mockCurriculumService = jasmine.createSpyObj('curriculumService', ['getAllCurriculum', 'addCurriculum', 'updateCurriculum', 'deleteCurriculum']);

    component.currentCurriculumList = Curricula;
  });

  it('should load the page with an empty list -> `onInit()`', () => {
    component.ngOnInit();
    const expected = [];
    const actual = component.currentCurriculumList;
    expect(actual).toEqual(expected);
  });

  it('should contain a list of Curricula', () => {
    const expected = Curricula;
    const actual = component.currentCurriculumList;
    expect(actual).toEqual(expected);
  });

  it('should change the list if something is changed on the page', () => {
    const expectedCurriculaList = Curricula;
    component.ngOnChanges();
    const actual = component.currentCurriculumList;
    expect(actual).toEqual(expectedCurriculaList);
  });

  it('should change the `currentCurriculumId` should be emitted after loading the page', () => {
    const expected = 2;
    const actual = 2;
    spyOn(component.currentCurriculumId, 'emit');
    component.changeCurrentCurriculum(expected);
    expect(actual).toEqual(expected);
  });
});
