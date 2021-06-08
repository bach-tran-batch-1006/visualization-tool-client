import { Component, Input, OnChanges } from '@angular/core';
import { Category } from '../models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnChanges {

  @Input() currentCategoryList: Category[] = [];
  @Input() categoryColorList: String[] = [];
  CategoryFound:boolean =false;
 

  constructor() { }

  ngOnInit() {
    this.currentCategoryList= [];
  }

  ngOnChanges(): void {
    if(this.currentCategoryList.length>0)
     this.CategoryFound= true;
    console.log("cat component", this.categoryColorList);
    console.log("cat component", this.currentCategoryList);
  }

}
