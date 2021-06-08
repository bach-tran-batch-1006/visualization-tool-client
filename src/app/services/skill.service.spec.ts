import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SkillService } from './skill.service';
import { of } from 'rxjs';

describe('SkillService', () => {
  let service: SkillService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(SkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all skills', () => {
    let categoryObj = {
      categoryId: 33,
      categoryName: 'Front-End',
      categoryDescription: null,
      categoryColor: ''
    };

    let expected =[
      {
        skillId: 1,
        skillName: "Java",
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
    })

    expect(response).toEqual(expected);
  });

  it('should Add skill', () => {
    let categoryObj = {
      categoryId: 33,
      categoryName: 'Front-End',
      categoryDescription: null,
      categoryColor: ''
    };

    let expected =[
      {
        skillId: 1,
        skillName: "Java",
        isActive: true,
        color: '',
        category: categoryObj
      },
    ];

    let addSkillDTO = {
        name: "Java",
        category: categoryObj
    }

    let response;
    spyOn(service, 'addSkill').and.returnValue(of(expected));

    service.addSkill(addSkillDTO).subscribe((res) => {
      response = res;
      console.log('Add new Skill', response);
    })

    expect(response).toEqual(expected);
  });

  it('should update skill', () => {
    let categoryObj = {
      categoryId: 33,
      categoryName: 'Front-End',
      categoryDescription: null,
      categoryColor: ''
    };

    let expected =[
      {
        skillId: 1,
        skillName: "Java Update",
        isActive: true,
        color: '',
        category: categoryObj
      },
    ];

    let updateSkillDTO = {
        name: "Java Update",
        category: categoryObj
    }

    let response;
    spyOn(service, 'updateSkill').and.returnValue(of(expected));

    service.updateSkill(1, updateSkillDTO).subscribe((res) => {
      response = res;
      console.log('Update new Skill', response);
    })

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
