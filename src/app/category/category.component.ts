import { Component, Input} from '@angular/core';
import { Category } from '../models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent  {

  @Input() currentCategoryList: Category[] = [];
  @Input() categoryColorList: String[] = [];

  constructor() { }
}
