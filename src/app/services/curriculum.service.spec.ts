import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CurriculumService } from './curriculum.service';
import { of } from 'rxjs';

describe('CurriculumService', () => {
  let service: CurriculumService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [CurriculumService]
    });
    service = TestBed.inject(CurriculumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get all curriculum', () => {
    const expected = [
      {
        curriculumId: 33,
        curriculumName: 'Java React',
        isActive: true,
        skillList: [],
      }
    ];

    spyOn(service, 'getAllCurriculum').and.returnValue(of(expected));

    let result;
    service.getAllCurriculum().subscribe((res) => {
      result = res;
    });
    expect(result).toEqual(expected);
  });

  it('should add new curriculum', () => {
    const categoryObj = {
      categoryId: 33,
      categoryName: 'Front-End',
      categoryDescription: null,
      categoryColor: ''
    };

    const skill = [
      {
        skillId: 1,
        skillName: 'Java Update',
        isActive: true,
        color: '',
        category: categoryObj
      },
    ];

    const expected = {
      curriculumId: 1,
      curriculumName: 'Full Stack Developer',
      skillList: skill,
      isActive: true
    };

    const addCurriculumDTO = {
      name: 'Full Stack Developer',
      skillList: skill
    };
    let response;
    spyOn(service, 'addCurriculum').and.returnValue(of(expected));
    service.addCurriculum(addCurriculumDTO).subscribe((res) => {
      response = res;
      console.log('add new curriculum: ', response);
    });
    expect(response).toEqual(expected);
  });

  it('should update curriculum', () => {
    const categoryObj = {
      categoryId: 33,
      categoryName: 'Front-End',
      categoryDescription: null,
      categoryColor: ''
    };

    const skill = [
      {
        skillId: 1,
        skillName: 'Java Update',
        isActive: true,
        color: '',
        category: categoryObj
      },
    ];

    const expected = {
      curriculumId: 1,
      curriculumName: 'Full Stack Developer v2',
      skillList: skill,
      isActive: true
    };

    const addCurriculumDTO = {
      name: 'Full Stack Developer v2',
      skillList: skill
    };
    let response;
    spyOn(service, 'updateCurriculum').and.returnValue(of(expected));
    service.updateCurriculum(1, addCurriculumDTO).subscribe((res) => {
      response = res;
      console.log('update curriculum: ', response);
    });
    expect(response).toEqual(expected);
  });

  it('should delete curriculum by Id', () => {
    let response;
    spyOn(service, 'deleteCurriculum').and.returnValue(of(1));
    service.deleteCurriculum(40).subscribe((res) => {
      response = res;
    });
    expect(response).toEqual(1);
  });

});
