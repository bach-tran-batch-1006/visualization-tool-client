import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SkillService } from './skill.service';
import { AppComponent } from '../app.component';
import { CurriculumEditComponent } from '../curriculum-edit/curriculum-edit.component';
import { SkillCategoryEditComponent } from '../skill-category-edit/skill-category-edit.component';
import { SkillComponent } from '../skill/skill.component';
import { NavbarComponent } from '../navbar/navbar.component';

describe('SkillService', () => {
  let service: SkillService;
  const apiUrl = 'http://3.226.243.38:8081/skill';

  const skilldto = {
      name: 'Skilltest' ,
      category : {
      categoryId: 39,
      categoryName: 'Web Framework',
      categoryDescription: 'A web framework is a software framework that is designed to support the development of web applications including web services, web resources, and web APIs.',
      categoryColor: ''
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, CurriculumEditComponent, SkillCategoryEditComponent, SkillComponent, NavbarComponent ],
      providers: [SkillService],
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.inject(SkillService);
  });

  afterEach (inject ([HttpTestingController], (httpmock: HttpTestingController) => {
    httpmock.verify();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(' should add new skill',
  inject([HttpTestingController, SkillService],
    (httpMock: HttpTestingController,  service1: SkillService) => {
    const  expected = {
        skillId: 1,
        skillName: 'Skilltest',
        category: {
            categoryId: 39,
            categoryName: 'Web Framework',
            categoryDescription: 'A web framework is a software framework that is designed to support the development of web applications including web services, web resources, and web APIs.'
        }
      };
      // We call the service
    service1.addSkill(skilldto).subscribe(data => {
        expect(data).toEqual(expected);
        });
        // We set the expectations for the HttpClient mock
    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toEqual('POST');
        // Then we set the fake data to be returned by the mock
    req.flush(expected);
    })
);

//
  it('should get all skill',
    inject([HttpTestingController, SkillService],
      (httpMock: HttpTestingController, service2: SkillService) => {
        const listofskills = [];
        const expected = {
            skillId: 1,
            skillName: 'Skilltest',
            category: {
                categoryId: 39,
                categoryName: 'Web Framework',
                categoryDescription: 'A web framework is a software framework that is designed to support the development of web applications including web services, web resources, and web APIs.'
            }
          };
        listofskills.push(expected);
        service2.getSkills().subscribe(data => {
        expect(data[0].skillId).toBe(1);
        expect(data[0].skillName).toEqual(expected.skillName);
        });
        const req = httpMock.expectOne('http://3.226.243.38:8081/allSkills');
        expect(req.request.method).toEqual('GET');
        req.flush(listofskills);

      })
  );
//
  it('should update skill',
    inject([HttpTestingController, SkillService],
      (httpMock: HttpTestingController, service3: SkillService) => {
      const expected = {
          skillId: 1,
          skillName: 'Skilltest',
          category: {
              categoryId: 39,
              categoryName: 'Web Framework',
              categoryDescription: 'A web framework is a software framework that is designed to support the development of web applications including web services, web resources, and web APIs.'
          },
        };
      service3.updateSkill(1, skilldto).subscribe(data => {
      expect(data).toEqual(expected);
        });
      const req = httpMock.expectOne('http://3.226.243.38:8081/skill/1');
      expect(req.request.method).toEqual('PUT');
      req.flush(expected);
      })
  );

//

  it('should delete skill',
    inject([HttpTestingController, SkillService],
      (httpMock: HttpTestingController, service4: SkillService) => {
        const expected = 1;
        service4.deleteSkill(1).subscribe(data => {
        expect(data).toBe(1);
        });
        const req = httpMock.expectOne('http://3.226.243.38:8081/skill/1');
        expect(req.request.method).toEqual('DELETE');
        req.flush(expected);

      })
  );
});
