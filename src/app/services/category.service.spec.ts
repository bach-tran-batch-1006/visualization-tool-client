import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CategoryService } from './category.service';
import { of } from 'rxjs';

describe('CategoryService', () => {
  let service: CategoryService;
  const expected = [
    {
      categoryId: 1,
      categoryName: 'Server-Side Technologies',
      categoryDescription: 'Tools for building out the back-end of an application.',
      categoryColor: ''
    },
    {
      categoryId: 33,
      categoryName: 'Front-End',
      categoryDescription: null,
      categoryColor: ''
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoryService],
    });
    service = TestBed.inject(CategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all categories', () => {
    let response;
    spyOn(service, 'getCategories').and.returnValue(of(expected));

    service.getCategories().subscribe((res) => {
      response = res;
    });

    expect(response).toEqual(expected);
  });

  it('should add category', () => {
    let newCategory = {
        categoryId: 0,
        categoryName: 'Test Category',
        categoryDescription: 'Programming Languages',
        categoryColor: ''
      };

    let response;
    spyOn(service, 'addCategory').and.returnValue(of(newCategory));
    service.addCategory(newCategory).subscribe((res) => {
      response = res;
    });
    expect(response).toEqual(newCategory);
  });

  it('should update category', () => {
    let updated = {
      categoryId: 1,
      categoryName: 'Updated Language',
      categoryDescription: 'Updated Programming Languages',
      categoryColor: ''
    };
    let response;
    spyOn(service, 'updateCategory').and.returnValue(of(updated));
    service.updateCategory(1, updated).subscribe((res) => {
      response = res;
    });
    expect(response).toEqual(updated);
  });

  it('should delete category', () => {
    let response;
    spyOn(service, 'deleteCategory').and.returnValue(of(null));
    service.deleteCategory(1).subscribe((res) => {
      response = res;
    });
    expect(response).toEqual(null);
  });
});
