import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { VisualizationService } from './visualization.service';
import { Visualization, VisualizationDTO } from '../models/Visualization';
import { Skill } from '../models/Skill';
import { Category } from '../models/Category';

describe('VisualizationService', () => {
  let service: VisualizationService;

  const apiURL = 'http://3.226.243.38:8081/visualization/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VisualizationService],
    });
    service = TestBed.inject(VisualizationService);
  });

  afterEach( inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all visualizations',
    inject([HttpTestingController, VisualizationService],
      (httpMock: HttpTestingController, visualizationService: VisualizationService) => {
        visualizationService.getAllVisualizations().subscribe(response => {
          expect(response[0].visualizationId).toBe(40);
          expect(response[0].visualizationName).toBe('New');
          expect(response[0].curriculumList).toEqual([]);
        });

        const req = httpMock.expectOne(apiURL);
        expect(req.request.method).toEqual('GET');

        const mockResponse: Visualization[] = [];
        const mockResponseOne: Visualization = {
          visualizationId: 40,
          visualizationName: 'New',
          curriculumList: []
        };
        mockResponse.push(mockResponseOne);

        req.flush(mockResponse);
      })
  );

  it('should get one visualization',
    inject([HttpTestingController, VisualizationService],
      (httpMock: HttpTestingController, visualizationService: VisualizationService) => {
        visualizationService.getVisualizationById(40).subscribe(response => {
          expect(response.visualizationId).toBe(40);
          expect(response.visualizationName).toBe('New');
          expect(response.curriculumList).toEqual([]);
        });

        const req = httpMock.expectOne(`${apiURL}40`);
        expect(req.request.method).toEqual('GET');

        const mockResponse: Visualization = {
          visualizationId: 40,
          visualizationName: 'New',
          curriculumList: []
        };

        req.flush(mockResponse);
      })
  );

  it('should add one visualization',
    inject([HttpTestingController, VisualizationService],
      (httpMock: HttpTestingController, visualizationService: VisualizationService) => {

        const mockDTO: VisualizationDTO = {
          title: 'New1',
          curricula: []
        };

        visualizationService.addVisualization(mockDTO).subscribe(response => {
          expect(response.visualizationId).toBe(41);
          expect(response.visualizationName).toBe('New1');
          expect(response.curriculumList).toEqual([]);
        });

        const req = httpMock.expectOne(`${apiURL}`);
        expect(req.request.method).toEqual('POST');

        const mockResponse: Visualization = {
          visualizationId: 41,
          visualizationName: 'New1',
          curriculumList: []
        };

        req.flush(mockResponse);
      })
  );

  it('should update one visualization name',
    inject([HttpTestingController, VisualizationService],
      (httpMock: HttpTestingController, visualizationService: VisualizationService) => {

        const mockDTO: VisualizationDTO = {
          title: 'New-changed',
          curricula: []
        };

        visualizationService.updateVisualization(41, mockDTO).subscribe(response => {
          expect(response.visualizationId).toBe(41);
          expect(response.visualizationName).toBe('New-changed');
          expect(response.curriculumList).toEqual([]);
        });

        const req = httpMock.expectOne(`${apiURL}41`);
        expect(req.request.method).toEqual('PUT');

        const mockResponse: Visualization = {
          visualizationId: 41,
          visualizationName: 'New-changed',
          curriculumList: []
        };

        req.flush(mockResponse);
      })
  );

  it('should delete one visualization',
    inject([HttpTestingController, VisualizationService],
      (httpMock: HttpTestingController, visualizationService: VisualizationService) => {

        visualizationService.deleteVisualization(41).subscribe(response => {
          expect(response).toBe(41);
        });

        const req = httpMock.expectOne(`${apiURL}41`);
        expect(req.request.method).toEqual('DELETE');

        const mockResponse = 41;

        req.flush(mockResponse);
      })
  );

  it('should get all unique skills by visualization',
    inject([HttpTestingController, VisualizationService],
      (httpMock: HttpTestingController, visualizationService: VisualizationService) => {

        visualizationService.getAllUniqueSkillsByVisualization(41).subscribe(response => {
          expect(response[0].skillId).toBe(1);
          expect(response[0].skillName).toBe('Java');
          expect(response[0].category.categoryName).toBe('Language');
        });

        const req = httpMock.expectOne(`${apiURL}41/skills`);
        expect(req.request.method).toEqual('GET');

        const mockResponse: any[] = [];
        const mockCategory = {
          categoryId: 1,
          categoryName: 'Language',
          categoryDescription: 'Some Description'
        };
        const mockResponseOne = {
          skillId: 1,
          skillName: 'Java',
          category: mockCategory
        };
        mockResponse.push(mockResponseOne);

        req.flush(mockResponse);
      })
  );

  it('should get all unique categories by visualization',
    inject([HttpTestingController, VisualizationService],
      (httpMock: HttpTestingController, visualizationService: VisualizationService) => {

        visualizationService.getAllUniqueCategoriesByVisualization(41).subscribe(response => {
          expect(response[0].categoryId).toBe(1);
          expect(response[0].categoryName).toBe('Language');
          expect(response[0].categoryDescription).toBe('Some Description');
        });

        const req = httpMock.expectOne(`${apiURL}41/categories`);
        expect(req.request.method).toEqual('GET');

        const mockResponse: any[] = [];
        const mockCategory = {
          categoryId: 1,
          categoryName: 'Language',
          categoryDescription: 'Some Description'
        };
        mockResponse.push(mockCategory);

        req.flush(mockResponse);
      })
  );

});
