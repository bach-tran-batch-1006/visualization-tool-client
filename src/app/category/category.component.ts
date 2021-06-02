import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryResults: any[] = new Array();
  categoryList: any[] = [
    {
      id:1,
      categoryName:"Language",
      categoryDescription:"Programming Language",
      categoryColor:"#e59372"
    },
    {
      id:2,
      categoryName:"DevOps",
      categoryDescription:"Developement and Operations"
    },
    {
      id:3,
      categoryName:"Frontend",
      categoryDescription:"Client Side Frameworks"
    }
  ];
  constructor(private categoryService: CategoryService) { 
    
  }

  ngOnInit(): void {
    //this.getAllCategories();

    console.log("CategoryResult "+this.categoryResults);
  }

  getAllCategories(){
    this.categoryService.getCategories().subscribe((result)=>{
      console.log("Result "+result);
      this.categoryResults = result;
    });
  }

  randColor(){
    let number = Math.floor(Math.random()*16777215).toString(16);
    console.log(number);
    return "#"+number;
  }
}
