import { Component, OnInit } from '@angular/core';
import { Category, CategoryDTO } from '../models/Category';
import { Skill, SkillDTO } from '../models/Skill';
import { CategoryService } from '../services/category.service';
import { SkillService } from '../services/skill.service';
import {  Project, ProjectDTO} from "../models/Project";
import { ProjectSaveService} from"../services/project-save.service";
@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  //styleUrls: ['./project-edit.component.css']
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

  visibleProject:boolean =false;
  visibleProject2:boolean =false;
  visibleMProject:boolean=false;
  visibleMProject2:boolean=false;
  visibleDProject:boolean=false;
  visibleDProject2:boolean=false;

  visibleCurric:boolean =false;
  visibleCurric2:boolean =false;
  visibleMCurric:boolean=false;
  visibleMCurric2:boolean=false;
  visibleDCurric:boolean=false;
  visibleDCurric2:boolean=false;

  visibleSkills:boolean =false;
  visibleSkills2:boolean =false;
  visibleMSkills:boolean=false;
  visibleMSkills2:boolean=false;
  visibleDSkills:boolean=false;
  visibleDSkills2:boolean=false;


  visibleCatego:boolean =false;



  constructor(private skillService: SkillService, private categoryService: CategoryService, private projectSaveService:ProjectSaveService) { }

  ngOnInit(): void {
    this.visualReset();
  }

  // ********** PROJECT VISUAL MANIPULATORS **********
  
visualReset(){
  this.intro=true;

  this.visibleVisual=false;
  this.visibleVisual2=false;  
  this.visibleMVisual=false;
  this.visibleMVisual2=false;
  this.visibleDVisual=false;
  this.visibleDVisual2=false;

  this.visibleCurric=false;
  this.visibleCurric2=false;
  this.visibleMCurric=false;
  this.visibleMCurric2=false;
  this.visibleDCurric=false;
  this.visibleDCurric2=false;

  this.visibleProject=false;
  this.visibleProject2 =false;
  this.visibleMProject=false;
  this.visibleMProject2=false;
  this.visibleDProject=false;
  this.visibleDProject2=false;

  this.visibleSkills=false;
  this.visibleSkills2 =false;
  this.visibleMSkills=false;
  this.visibleMSkills2=false;
  this.visibleDSkills=false;
  this.visibleDSkills2=false;

  this.visibleCatego=false;
}

showProject(){
  this.intro =false;
  this.visibleProject = !this.visibleProject;
  
  this.visibleVisual=false;
  this.visibleVisual2=false;  
  this.visibleMVisual=false;
  this.visibleMVisual2=false;
  this.visibleDVisual=false;
  this.visibleDVisual2=false;

  this.visibleCurric=false;
  this.visibleCurric2=false;
  this.visibleMCurric=false;
  this.visibleMCurric2=false;
  this.visibleDCurric=false;
  this.visibleDCurric2=false;

  this.visibleProject2 =false;
  this.visibleMProject=false;
  this.visibleMProject2=false;
  this.visibleDProject=false;
  this.visibleDProject2=false;

  this.visibleSkills=false;
  this.visibleSkills2 =false;
  this.visibleMSkills=false;
  this.visibleMSkills2=false;
  this.visibleDSkills=false;
  this.visibleDSkills2=false;

  this.visibleCatego=false;
}
showProject2(){
this.visibleProject2 =true;
this.visibleSkills =true;
}
showMProject(){
  this.intro =false;
  this.visibleVisual =false;
  this.visibleCurric =false;
  this.visibleProject =false;
  this.visibleMProject =true;
  this.visibleSkills =false;
}
showMProject2(){
this.visibleMProject2 =true;
}
showDProject(){
  this.intro =false;
  this.visibleVisual =false;
  this.visibleCurric =false;
  this.visibleProject =false;
  this.visibleDProject =true;
  this.visibleSkills =false;
}
showDProject2(){
this.visibleDProject2 =true;
}
hideProject() {
  this.visibleProject2 =false;
  this.visibleMProject=false;
  this.visibleMProject2=false;
  this.visibleDProject=false;
  this.visibleDProject2=false;
  this.visibleSkills =false;
}

// ********** SKILLS MANIPULATORS **********

showSkills2(){
  this.visibleSkills2 =true;
  this.visibleCatego =true;
  }
  showMSkills(){
    this.intro =false;
    this.visibleVisual =false;
    this.visibleCurric =false;
    this.visibleProject =false;
    this.visibleSkills =false;
    this.visibleMSkills =true;
  }
  showMSkills2(){
  this.visibleMSkills2 =true;
  this.visibleCatego =true;
  }
  showDSkills(){
    this.intro =false;
    this.visibleVisual =false;
    this.visibleCurric =false;
    this.visibleProject =false;
    this.visibleSkills =false;
    this.visibleDSkills =true;
  }
  showDSkills2(){
  this.visibleDSkills2 =true;
  }
  hideSkills(){
    this.visibleSkills2 =false;
    this.visibleCatego =false;
  
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
    categoryDescription: this.categoryDescriptionAdd,
    userid: Number(localStorage.getItem('userId'))
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

projectName:string;
projectDesc:string;
projectId:number;
addProject():Project{
  const proDTO: ProjectDTO = {
    projectName: this.projectName,
    // projectDesc: this.projectDesc
    // projectId:this.projectId
  };
  console.log(proDTO);
  let newPro;
  this.projectSaveService.save(this.projectName).subscribe((response) => {
    newPro = response;
    this.addProject;
  });
  this.projectName = '';
  this.projectDesc = '';
  // this.projectId
  return newPro;
}
}
