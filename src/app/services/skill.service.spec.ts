import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SkillService } from './skill.service';
import { of } from 'rxjs';
import { AppComponent } from '../app.component';
import { CurriculumEditComponent } from '../curriculum-edit/curriculum-edit.component';
import { SkillCategoryEditComponent } from '../skill-category-edit/skill-category-edit.component';
import { SkillComponent } from '../skill/skill.component';
import { NavbarComponent } from '../navbar/navbar.component';

describe('SkillService', () => {
  let service: SkillService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, CurriculumEditComponent, SkillCategoryEditComponent, SkillComponent, NavbarComponent ],
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(SkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all skills', () => {
    const categoryObj = {
      categoryId: 33,
      categoryName: 'Front-End',
      categoryDescription: null,
      categoryColor: ''
    };

    const expected = [
      {
        skillId: 1,
        skillName: 'Java',
        isActive: true,
        color: '',
        category: categoryObj
      },
    ];

    let response;
    spyOn(service, 'getSkills').and.returnValue(of(expected));

    service.getSkills().subscribe((res) => {
      response = res;
      console.log('');
    });

    expect(response).toEqual(expected);
  });

  it('should Add skill', () => {
    const categoryObj = {
      categoryId: 33,
      categoryName: 'Front-End',
      categoryDescription: null,
      categoryColor: ''
    };

    const expected = [
      {
        skillId: 1,
        skillName: 'Java',
        isActive: true,
        color: '',
        category: categoryObj
      },
    ];

    const addSkillDTO = {
        name: 'Java',
        category: categoryObj
    };

    let response;
    spyOn(service, 'addSkill').and.returnValue(of(expected));

    service.addSkill(addSkillDTO).subscribe((res) => {
      response = res;
      console.log('Add new Skill', response);
    });

    expect(response).toEqual(expected);
  });

  it('should update skill', () => {
    const categoryObj = {
      categoryId: 33,
      categoryName: 'Front-End',
      categoryDescription: null,
      categoryColor: ''
    };

    const expected = [
      {
        skillId: 1,
        skillName: 'Java Update',
        isActive: true,
        color: '',
        category: categoryObj
      },
    ];

    const updateSkillDTO = {
        name: 'Java Update',
        category: categoryObj
    };

    let response;
    spyOn(service, 'updateSkill').and.returnValue(of(expected));

    service.updateSkill(1, updateSkillDTO).subscribe((res) => {
      response = res;
      console.log('Update new Skill', response);
    });

    expect(response).toEqual(expected);
  });

  it('should delete skill by ID', () => {
    let response;
    spyOn(service, 'deleteSkill').and.returnValue(of(1));
    service.deleteSkill(1).subscribe((res) => {
      response = res;
    });
    expect(response).toEqual(1);
  });
});
