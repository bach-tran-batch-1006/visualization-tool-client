import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() currentCategoryList: Category[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  randColor(){
    let number = Math.floor(Math.random()*16777215).toString(16);
    return "#"+number;
  }
}
