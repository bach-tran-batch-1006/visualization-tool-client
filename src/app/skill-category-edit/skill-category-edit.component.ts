import { Component, OnInit } from '@angular/core';
import { Category, CategoryDTO } from '../models/Category';
import { Skill, SkillDTO } from '../models/Skill';
import { CategoryService } from '../services/category.service';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-skill-category-edit',
  templateUrl: './skill-category-edit.component.html',
  styleUrls: ['./skill-category-edit.component.css']
})
export class SkillCategoryEditComponent implements OnInit {

  skillList: Skill[] = [];

  showAddSkill:boolean = false;
  showUpdateSkill: boolean = false;

  skillNameAdd:string;
  skillName:string;

  selectedSkillList: Skill[];

  categoryList: Category[] = [];
  showAddCategory:boolean = false;
  showUpdateCategory: boolean = false;
  categoryNameAdd:string;
  categoryDescriptionAdd:string;
  categoryName: string;
  categoryDescription: string;
  selectedCategory: Category;

  constructor(private skillService: SkillService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllSkills();
  }

  getAllCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categoryList = [];
      response.sort((a, b) => (a.categoryName.toLowerCase() > b.categoryName.toLowerCase()) ? 1 : -1);
      this.categoryList = response;
    });
  }

  getAllSkills() {
    this.skillService.getSkills().subscribe((response) => {
      this.skillList = response;
      this.skillList.sort((a, b) => (a.skillName.toLowerCase() > b.skillName.toLowerCase()) ? 1 : -1);
      // for (let skill of this.skillList) {
      let listSize = this.skillList.length;
      for (let index = 0; index < listSize; index++) {
        this.skillList[index].isActive = false;
      }
    });
  }

  addCategory() {
    let catDTO: CategoryDTO = {
      categoryName: this.categoryNameAdd,
      categoryDescription: this.categoryDescriptionAdd
    }
    console.log(catDTO);
    this.categoryService.addCategory(catDTO).subscribe((response) => {
      this.getAllCategories();
    });
    this.categoryName = "";
    this.categoryDescription = "";
  }

  updateCategory() {
    let catId = this.selectedCategory.categoryId;
    let catDTO: CategoryDTO = {
      categoryName: this.categoryName,
      categoryDescription: this.categoryDescription
    }
    this.categoryService.updateCategory(catId,catDTO).subscribe((response) => {
      this.getAllCategories();
      this.categoryName = "";
      this.categoryDescription = "";
    });
  }

  deleteCategory() {
    let catId = this.selectedCategory.categoryId;
    this.selectedCategory.categoryId = 0;
    this.categoryService.deleteCategory(catId).subscribe((response) => {
      this.getAllCategories();
    });
  }

  displayCategory() {
    console.log(this.selectedCategory);
    this.categoryName = this.selectedCategory.categoryName;
    this.categoryDescription = this.selectedCategory.categoryDescription;
    // this.showUpdateCategory = true;
  }

  toggleAddCategory() {
    this.showAddCategory = !this.showAddCategory;
    this.showUpdateCategory = false;
  }

  toggleUpdateCategory(){
    this.showUpdateCategory = !this.showUpdateCategory;
    this.showAddCategory = false;
  }

  toggleAddSkill() {
    this.showAddSkill = !this.showAddSkill;
    this.showUpdateSkill = false;
  }

  toggleUpdateSkill() {
    this.showUpdateSkill = !this.showUpdateSkill;
    this.showAddSkill = false;
  }

  addSkill() {
    let skillDTO: SkillDTO = {
      name: this.skillNameAdd,
      category: this.selectedCategory
    }
    console.log(skillDTO);
    this.skillService.addSkill(skillDTO).subscribe((response) => {
      console.log(response);
      this.getAllSkills();
    });
    this.categoryNameAdd = "";
  }

  deleteSkill() {
    for(let skill of this.skillList){
      if(skill.isActive){
        console.log(skill);
      }
    }
  }

  toggleSkill(selectSkillId) {
    let listSize = this.skillList.length;
    for(let index = 0; index < listSize; index++){
      if(this.skillList[index].skillId === selectSkillId){
        this.skillList[index].isActive = !this.skillList[index].isActive;
      }
    }
  }

}
