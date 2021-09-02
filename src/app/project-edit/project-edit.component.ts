import { Component, OnInit } from '@angular/core';
import { Category, CategoryDTO } from '../models/Category';
import { Skill, SkillDTO } from '../models/Skill';
import { CategoryService } from '../services/category.service';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

 
  skillList: Skill[] = [];

  showAddSkill = false;
  showUpdateSkill = false;

  skillNameAdd: string;
  skillNameUpdate: string;

  selectedSkill: Skill;

  showSkillDeleteFail = false;

  categoryList: Category[] = [];
  showAddCategory = false;
  showUpdateCategory = false;
  categoryNameAdd: string;
  categoryDescriptionAdd: string;
  categoryName: string;
  categoryDescription: string;
  selectedCategory: Category;
  showCategoryDeleteFail = false;

  visible:boolean = true;
  intro:boolean = true;


  visibleVisual:boolean =false;
  visibleVisual2:boolean =false;
  visibleMVisual:boolean=false;
  visibleMVisual2:boolean=false;
  visibleDVisual:boolean=false;
  visibleDVisual2:boolean=false;

  visibleCurric:boolean =false;
  visibleCurric2:boolean =false;
  visibleMCurric:boolean=false;
  visibleMCurric2:boolean=false;
  visibleDCurric:boolean=false;
  visibleDCurric2:boolean=false;

  visibleProject:boolean =false;
  visibleProject2:boolean =false;
  visibleMProject:boolean=false;
  visibleMProject2:boolean=false;
  visibleDProject:boolean=false;
  visibleDProject2:boolean=false;

  visibleSkills:boolean =false;
  visibleSkills2:boolean =false;
  visibleMSkills:boolean=false;
  visibleMSkills2:boolean=false;
  visibleDSkills:boolean=false;
  visibleDSkills2:boolean=false;

  visibleCatego:boolean =false;



  constructor(private skillService: SkillService, private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  // ********** VISUAL MANIPULATORS **********
  visualReset(){
    this.intro=true;
  
    this.visibleVisual=false;
    this.visibleVisual2=false;  
    this.visibleMVisual=false;
    this.visibleMVisual2=false;
    this.visibleDVisual=false;
    this.visibleDVisual2=false;
    
  }  
  
  showVisual(){
    this.intro =false;
    this.visibleVisual =true;
  
    this.visibleVisual2=false;  
    this.visibleMVisual=false;
    this.visibleMVisual2=false;
    this.visibleDVisual=false;
    this.visibleDVisual2=false;
  }
  
  showVisual2(){
    this.visibleVisual2 = true;
  }
  
  showMVisual(){
    this.intro =false;
    this.visibleVisual =false;
    this.visibleMVisual =true;
  
  }
  
  showMVisual2(){
    this.visibleMVisual2 = true;
  }
  showDVisual(){
    this.intro =false;
    this.visibleVisual =false;
    this.visibleDVisual =true;
  
  }
  showDVisual2(){
    this.visibleDVisual2 = true;
  }

// ********** PROJECT FUNCTIONS **********

// ********** SKILL FUNCTIONS **********

getAllSkills(): void {
  this.skillService.getSkills().subscribe((response) => {
    this.skillList = response;
    this.skillList.sort((a, b) => (a.skillName.toLowerCase() > b.skillName.toLowerCase()) ? 1 : -1);
    const listSize = this.skillList.length;
    for (let index = 0; index < listSize; index++) {
      this.skillList[index].isActive = false;
    }
  });
}

addSkill(): Skill {
  const skillDTO: SkillDTO = {
    name: this.skillNameAdd,
    category: this.selectedCategory
  };
  let newSkill;
  this.skillService.addSkill(skillDTO).subscribe((response) => {
    newSkill = response;
    this.getAllSkills();
  });
  this.skillNameAdd = '';
  return newSkill;
}

// ********** CATEGORY FUNCTIONS **********
getAllCategories(): void {
  this.categoryService.getCategories().subscribe((response) => {
    this.categoryList = [];
    response.sort((a, b) => (a.categoryName.toLowerCase() > b.categoryName.toLowerCase()) ? 1 : -1);
    this.categoryList = response;
  });
}


addCategory(): Category {
  const catDTO: CategoryDTO = {
    categoryName: this.categoryNameAdd,
    categoryDescription: this.categoryDescriptionAdd
  };
  console.log(catDTO);
  let newCat;
  this.categoryService.addCategory(catDTO).subscribe((response) => {
    newCat = response;
    this.getAllCategories();
  });
  this.categoryName = '';
  this.categoryDescription = '';
  return newCat;
}
}
