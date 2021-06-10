import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CategoryComponent } from './category.component';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let mockCategoryService; 
  let CATEGORIES;
  let COLORS; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ CategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    CATEGORIES = [
      {cagegoryID:1, categoryName:'TestCategory1', cateogryDescription: 'Testing this Category 1', categoryColor: '#FF5733'},
      {cagegoryID:2, categoryName:'TestCategory2', cateogryDescription: 'Testing this Category 2', categoryColor: '#335733'},
      {cagegoryID:3, categoryName:'TestCategory3', cateogryDescription: 'Testing this Category 3', categoryColor: '#265733'}
    ]

    COLORS = [
      '#FF5733',
      '#335733',
      '#265733'
    ]; 

    const fixture = TestBed.createComponent(CategoryComponent); 

    mockCategoryService = jasmine.createSpyObj('categoryService', ['getCategories', 'addCategory', 'updateCategory', 'deleteCategory']);

    component = new CategoryComponent(); 
    component.currentCategoryList = CATEGORIES; 
    component.categoryColorList = COLORS; 
  });

  it('should contain a list of Categories', () => { 
    expect(component.currentCategoryList).toEqual(CATEGORIES); 
  });
  
  it('should contain a list of colors for the Categories', () => {
    expect(component.categoryColorList).toEqual(COLORS); 
  })
});
