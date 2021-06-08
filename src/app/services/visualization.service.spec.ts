import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VisualizationService } from './visualization.service';
import { of } from 'rxjs';

describe('VisualizationService', () => {
  let service: VisualizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VisualizationService],
    });
    service = TestBed.inject(VisualizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all visualizations', () => {
    let expected = [
      {
        visualizationId: 40,
        visualizationName: 'New',
        curriculumList: [],
      },
    ];

    let response;
    spyOn(service, 'getAllVisualizations').and.returnValue(of(expected));

    service.getAllVisualizations().subscribe((res) => {
      response = res;
      console.log('');
    });

    expect(response).toEqual(expected);
  });

  it('should get visualization by id', () => {
    let expected = {
      visualizationId: 40,
      visualizationName: 'New',
      curriculumList: [],
    };

    let response;

    spyOn(service, 'getVisualizationById').and.returnValue(of(expected));
    service.getVisualizationById(40).subscribe((res) => {
      response = res;
      console.log('get visualization by id response: ', response);
    });
    expect(response).toEqual(expected);
  });

  it('should delete visualization by id', () => {

    let response;
    spyOn(service, 'deleteVisualization').and.returnValue(of(1));
    service.deleteVisualization(40).subscribe((res) => {
      response = res;
    });
    expect(response).toEqual(1);
  });

  it('should add new visualization', () => {
    let newCurr = [
      {
        curriculumId: 33,
        curriculumName: 'Java React',
        isActive: true,
        skillList: [],
      },
    ];

    let expected = {
      visualizationId: 1,
      visualizationName: 'New Vis',
      curriculumList: newCurr,
    };

    let addVisualizationDTo = {
      title: "New Vis",
      curricula: newCurr
    }

    let response;
    spyOn(service, 'addVisualization').and.returnValue(of(expected));
    service.addVisualization(addVisualizationDTo).subscribe((res) => {
      response = res;
      console.log('add new visualization: ', response);
    });
    expect(response).toEqual(expected);
  });

  it('should update visualization', () => {
    let updatedCurr = [
      {
        curriculumId: 33,
        curriculumName: 'Java React',
        isActive: true,
        skillList: [],
      },
    ];

    let visualizationUpdateReturn = {
      visualizationId: 40,
      visualizationName: 'Updated Vis',
      curriculumList: updatedCurr,
    };

    let visualizationUpdateDTO = {
      title: 'Updated Vis',
      curricula: updatedCurr,
    };
    let response;
    spyOn(service, 'updateVisualization').and.returnValue(of(visualizationUpdateReturn));
    service.updateVisualization(40, visualizationUpdateDTO)
      .subscribe((res) => {
        response = res;
      });
    expect(response).toEqual({
      visualizationId: 40,
      visualizationName: 'Updated Vis',
      curriculumList: updatedCurr,
    });
  });

  it('should get all unique skills by visualization', () => {
    let expectedSkills = [
      {
        skillId: 34,
        skillName: 'Javascript',
        color: '',
        isActive: false,
        category: {
          categoryId: 33,
          categoryName: 'Front-End',
          categoryDescription: null,
          categoryColor: '',
        },
      },
      {
        skillId: 33,
        skillName: 'Maven',
        color: '',
        isActive: false,
        category: {
          categoryId: 1,
          categoryName: 'Server-Side Technologies',
          categoryDescription:
            'Tools for building out the back-end of an application.',
          categoryColor: '',
        },
      },
      {
        skillId: 1,
        skillName: 'Spring',
        color: '',
        isActive: false,
        category: {
          categoryId: 1,
          categoryName: 'Server-Side Technologies',
          categoryDescription:
            'Tools for building out the back-end of an application.',
          categoryColor: '',
        },
      },
    ];
    let response;
    spyOn(service, 'getAllUniqueSkillsByVisualization').and.returnValue(
      of(expectedSkills)
    );

    service.getAllUniqueSkillsByVisualization(40).subscribe((res) => {
      response = res;
    });

    expect(response).toEqual(expectedSkills);
  });

  it('should get all unique categories by visualization', () => {
    let expectedCategories = [
      {
        categoryId: 33,
        categoryName: 'Front-End',
        categoryDescription: null,
        categoryColor: '',
      },
      {
        categoryId: 1,
        categoryName: 'Server-Side Technologies',
        categoryDescription:
          'Tools for building out the back-end of an application.',
        categoryColor: '',
      },
    ];

    let response;
    spyOn(service, 'getAllUniqueCategoriesByVisualization').and.returnValue(
      of(expectedCategories)
    );

    service.getAllUniqueCategoriesByVisualization(40).subscribe((res) => {
      response = res;
    });

    expect(response).toEqual(expectedCategories);
  });
});
