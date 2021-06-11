import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SkillComponent } from './skill.component';

describe('CategoryComponent', () => {
  let component: SkillComponent;
  let mockSkillService;
  let currentCategory;
  let SKILLS;
  let activeSKILLS;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ SkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    currentCategory = {
      categoryID: 1, categoryName: 'TestCategory1', categoryDescription: 'Testing this Category 1', categoryColor: '#FF5733'
    };

    SKILLS = [
      {skillId: 1, skillName: 'TestSkill1', category: currentCategory, isActive: false, color: 'FF5733'},
      {skillId: 2, skillName: 'TestSkill2', category: currentCategory, isActive: true, color: 'FF5733'},
      {skillId: 3, skillName: 'TestSkill3', category: currentCategory, isActive: true, color: 'FF5733'}
    ];

    activeSKILLS = [
      {skillId: 2, skillName: 'TestSkill2', category: currentCategory, isActive: true, color: 'FF5733'},
      {skillId: 3, skillName: 'TestSkill3', category: currentCategory, isActive: true, color: 'FF5733'}
    ];

    const fixture = TestBed.createComponent(SkillComponent);

    mockSkillService = jasmine.createSpyObj('skillService', ['getSkills', 'addSkill', 'updateSkill', 'deleteSkill']);

    component = new SkillComponent();
    component.currentSkillList = SKILLS;
    component.activeSkillList = activeSKILLS;
  });

  it('should contain a list of Skills', () => {
    const expected = SKILLS;
    const actual = component.currentSkillList;
    expect(actual).toEqual(expected);
  });

  it('should contain a list of "active" skills after ngChanges', () => {
    const expected = [
      {skillId: 2, skillName: 'TestSkill2', category: currentCategory, isActive: true, color: 'FF5733'},
      {skillId: 3, skillName: 'TestSkill3', category: currentCategory, isActive: true, color: 'FF5733'}
    ];
    const actual = component.activeSkillList;
    expect(actual).toEqual(expected);
  });

  it('should contain a list of "active" skills after ngChanges', () => {
    const expected = [
      {skillId: 2, skillName: 'TestSkill2', category: currentCategory, isActive: true, color: 'FF5733'},
      {skillId: 3, skillName: 'TestSkill3', category: currentCategory, isActive: true, color: 'FF5733'}
    ];
    component.ngOnChanges();
    const actual = component.activeSkillList;
    expect(actual).toEqual(expected);
  });
});
