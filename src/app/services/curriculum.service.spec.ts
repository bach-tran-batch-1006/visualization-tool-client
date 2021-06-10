import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CurriculumService } from './curriculum.service';
import { AppComponent } from '../app.component';
import { CurriculumEditComponent } from '../curriculum-edit/curriculum-edit.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CurriculumDTO } from '../models/Curriculum';

describe('CurriculumService', () => {
  let service: CurriculumService;

  const apiURL = 'http://3.226.243.38:8081/curriculum/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, CurriculumEditComponent, NavbarComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [CurriculumService],
    });

    service = TestBed.inject(CurriculumService);
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get all curriculum',
    inject([HttpTestingController, CurriculumService], (httpMock: HttpTestingController, curriculumService: CurriculumService) => {
     curriculumService.getAllCurriculum().subscribe(response => {
      expect(response[0].curriculumId).toBe(1);
      expect(response[0].curriculumName).toBe('New Curriculum');
      expect(response[0].skillList).toEqual([]);
     });

     const expectedRequest = httpMock.expectOne(apiURL);
     expect(expectedRequest.request.method).toEqual('GET');

     const mockResponse: any[] = [];
     const mockResponseOne = {
       curriculumId: 1,
       curriculumName: 'New Curriculum',
       skillList: []
     };

     mockResponse.push(mockResponseOne);
     expectedRequest.flush(mockResponse);
    })
  );

  it('should add new curriculum',
    inject([HttpTestingController, CurriculumService],
      (httpMock: HttpTestingController, curriculumService: CurriculumService) => {

        const mockDTO: CurriculumDTO = {
          name: 'Add Curriculum',
          skillList: [],
        };

        curriculumService.addCurriculum(mockDTO).subscribe(response => {
          expect(response.curriculumId).toBe(1);
          expect(response.curriculumName).toBe('Add Curriculum');
          expect(response.skillList).toEqual([]);
        });

        const req = httpMock.expectOne(`${apiURL}`);
        expect(req.request.method).toEqual('POST');

        const mockResponse = {
          curriculumId: 1,
          curriculumName: 'Add Curriculum',
          skillList: []
        };

        req.flush(mockResponse);
      })
  );

  it('should update curriculum',
    inject([HttpTestingController, CurriculumService],
      (httpMock: HttpTestingController, curriculumService: CurriculumService) => {

      const mockDTO: CurriculumDTO = {
        name: 'Update Curriculum',
        skillList: [],
        };

      curriculumService.updateCurriculum(1, mockDTO).subscribe(response => {
        expect(response.curriculumId).toBe(1);
        expect(response.curriculumName).toBe('Update Curriculum');
        expect(response.skillList).toEqual([]);
      });

      const req = httpMock.expectOne(`${apiURL}1`);
      expect(req.request.method).toEqual('PUT');

      const mockResponse = {
        curriculumId: 1,
        curriculumName: 'Update Curriculum',
        skillList: []
      };

      req.flush(mockResponse);
    })
  );

  it('should delete curriculum',
    inject([HttpTestingController, CurriculumService],
    (httpMock: HttpTestingController, curriculumService: CurriculumService) => {
      curriculumService.deleteCurriculum(1).subscribe(reponse => {
        expect(reponse).toBe(1);
      });

      const req = httpMock.expectOne(`${apiURL}1`);
      expect(req.request.method).toEqual('DELETE');

      const mockResponse = 1;
      req.flush(mockResponse);
    })
  );
});
