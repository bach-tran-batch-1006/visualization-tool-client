import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CategoryService } from './category.service';
import { Category, CategoryDTO } from '../models/Category';
import { AppComponent } from '../app.component';
import { SkillCategoryEditComponent } from '../skill-category-edit/skill-category-edit.component';
import { CategoryComponent } from '../category/category.component';
import { NavbarComponent } from '../navbar/navbar.component';

describe('CategoryService', () => {
  let service: CategoryService;

  const apiURL = 'http://3.226.243.38:8081/category/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, SkillCategoryEditComponent, CategoryComponent, NavbarComponent ],
      imports: [HttpClientTestingModule],
      providers: [CategoryService],
    });
    service = TestBed.inject(CategoryService);
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all categories',
    inject([HttpTestingController, CategoryService],
      (httpMock: HttpTestingController, categoryService: CategoryService) => {
        categoryService.getCategories().subscribe((response) => {
          expect(response[0].categoryId).toBe(1);
          expect(response[0].categoryName).toBe('Server-Side Technologies');
          expect(response[0].categoryDescription).toBe('Tools for building out the back-end of an application.');
          expect(response[0].categoryColor).toBe('');
        });

        const req = httpMock.expectOne(apiURL);
        expect(req.request.method).toEqual('GET');

        const mockResponse: Category[] = [];
        const mockResponseOne: Category = {
          categoryId: 1,
          categoryName: 'Server-Side Technologies',
          categoryDescription: 'Tools for building out the back-end of an application.',
          categoryColor: ''
        };
        mockResponse.push(mockResponseOne);

        req.flush(mockResponse);
      })
  );

  it('should add one category',
    inject([HttpTestingController, CategoryService],
      (httpMock: HttpTestingController, categoryService: CategoryService) => {

        const mockDTO: CategoryDTO = {
          categoryName: 'Test Category',
          categoryDescription: 'Programming Languages'
        };

        categoryService.addCategory(mockDTO).subscribe((response) => {
          expect(response.categoryId).toBe(0);
          expect(response.categoryName).toBe('Test Category');
          expect(response.categoryDescription).toBe('Programming Languages');
          expect(response.categoryColor).toBe('');
        });

        const req = httpMock.expectOne(`${apiURL}`);
        expect(req.request.method).toEqual('POST');

        const mockResponse: Category = {
          categoryId: 0,
          categoryName: 'Test Category',
          categoryDescription: 'Programming Languages',
          categoryColor: ''
        };

        req.flush(mockResponse);
      })
  );

  it('should update one category name',
    inject([HttpTestingController, CategoryService],
      (httpMock: HttpTestingController, categoryService: CategoryService) => {

        const mockDTO: CategoryDTO = {
          categoryName: 'Updated Language',
          categoryDescription: 'Updated Programming Languages'
        };

        categoryService.updateCategory(1, mockDTO).subscribe((response) => {
          expect(response.categoryId).toBe(1);
          expect(response.categoryName).toBe('Updated Language');
          expect(response.categoryDescription).toBe('Updated Programming Languages');
          expect(response.categoryColor).toBe('');
        });

        const req = httpMock.expectOne(`${apiURL}1`);
        expect(req.request.method).toEqual('PUT');

        const mockResponse: Category = {
          categoryId: 1,
          categoryName: 'Updated Language',
          categoryDescription: 'Updated Programming Languages',
          categoryColor: ''
        };

        req.flush(mockResponse);
      })
  );

  it('should delete one category',
    inject([HttpTestingController, CategoryService],
      (httpMock: HttpTestingController, categoryService: CategoryService) => {

        categoryService.deleteCategory(1).subscribe((response) => {
          expect(response).toBe(1);
        });

        const req = httpMock.expectOne(`${apiURL}1`);
        expect(req.request.method).toEqual('DELETE');

        const mockResponse = 1;

        req.flush(mockResponse);
      })
  );
});
