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

  constructor() { }

  ngOnChanges(): void {
    console.log("cat component", this.categoryColorList);
    console.log("cat component", this.currentCategoryList);
  }

}
