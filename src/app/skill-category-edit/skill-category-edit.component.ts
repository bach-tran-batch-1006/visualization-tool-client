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

  constructor(private skillService: SkillService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllSkills();
  }

  getAllCategories(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categoryList = [];
      response.sort((a, b) => (a.categoryName.toLowerCase() > b.categoryName.toLowerCase()) ? 1 : -1);
      this.categoryList = response;
    });
  }

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

  // ********** CATEGORY FUNCTIONS **********

  addCategory(): void {
    const catDTO: CategoryDTO = {
      categoryName: this.categoryNameAdd,
      categoryDescription: this.categoryDescriptionAdd
    };
    console.log(catDTO);
    this.categoryService.addCategory(catDTO).subscribe((response) => {
      this.getAllCategories();
    });
    this.categoryName = '';
    this.categoryDescription = '';
  }

  updateCategory(): void {
    const catId = this.selectedCategory.categoryId;
    const catDTO: CategoryDTO = {
      categoryName: this.categoryName,
      categoryDescription: this.categoryDescription
    };
    this.categoryService.updateCategory(catId, catDTO).subscribe((response) => {
      this.getAllCategories();
      this.categoryName = '';
      this.categoryDescription = '';
    });
  }

  deleteCategory(): void {
    if (this.selectedCategory == null) {
      this.showCategoryDeleteFail = true;
    } else {
      const catId = this.selectedCategory.categoryId;
      this.selectedCategory.categoryId = 0;
      this.categoryService.deleteCategory(catId).subscribe((response) => {
        this.getAllCategories();
      });
    }
  }

  displayCategory(): void {
    this.showCategoryDeleteFail = false;
    this.categoryName = this.selectedCategory.categoryName;
    this.categoryDescription = this.selectedCategory.categoryDescription;
    this.showUpdateCategory = true;
    this.showAddCategory = false;
  }

  toggleAddCategory(): void {
    this.showCategoryDeleteFail = false;
    this.showAddCategory = !this.showAddCategory;
    this.showUpdateCategory = false;
  }

  toggleUpdateCategory(): void {
    this.showCategoryDeleteFail = false;
    this.showUpdateCategory = !this.showUpdateCategory;
    this.showAddCategory = false;
  }

  clearCategoryRadio(): void {
    if (this.selectedCategory) {
      const selectedCategoryRadio = document.getElementById(`category_${this.selectedCategory.categoryId}`) as HTMLInputElement;
      selectedCategoryRadio.checked = false;
      this.selectedCategory = null;
      this.categoryName = '';
      this.categoryDescription = '';
    } else if (this.selectedSkill) {
      const selectedCategoryRadio = document.getElementById(`category_${this.selectedSkill.category.categoryId}`) as HTMLInputElement;
      selectedCategoryRadio.checked = false;
    }
  }

  // ********** SKILL FUNCTIONS **********

  clearSkillRadio(): void {
    const selectedSkillRadio = document.getElementById(`skill_${this.selectedSkill.skillId}`) as HTMLInputElement;
    selectedSkillRadio.checked = false;
    const selectedCategoryRadio = document.getElementById(`category_${this.selectedSkill.category.categoryId}`) as HTMLInputElement;
    selectedCategoryRadio.checked = false;
    this.selectedSkill = null;
    this.skillNameUpdate = '';
  }

  toggleAddSkill(): void {
    this.showSkillDeleteFail = false;
    this.showAddSkill = !this.showAddSkill;
    this.showUpdateSkill = false;
  }

  toggleUpdateSkill(): void {
    this.showSkillDeleteFail = false;
    this.showUpdateSkill = !this.showUpdateSkill;
    this.showAddSkill = false;
  }

  toggleSkill(selectSkillId): void {
    const listSize = this.skillList.length;
    for (let index = 0; index < listSize; index++) {
      if (this.skillList[index].skillId === selectSkillId) {
        this.skillList[index].isActive = !this.skillList[index].isActive;
      }
    }
  }

  displaySkill(): void {
    this.skillNameUpdate = this.selectedSkill.skillName;
    const selectedCategoryRadio = document.getElementById(`category_${this.selectedSkill.category.categoryId}`) as HTMLInputElement;
    selectedCategoryRadio.checked = true;
    this.showAddSkill = false;
    this.showUpdateSkill = true;
    this.showSkillDeleteFail = false;
  }

  addSkill(): void {
    const skillDTO: SkillDTO = {
      name: this.skillNameAdd,
      category: this.selectedCategory
    };
    this.skillService.addSkill(skillDTO).subscribe((response) => {
      console.log(response);
      this.getAllSkills();
    });
    this.skillNameAdd = '';
  }

  updateSkill(): void {
    const skillId = this.selectedSkill.skillId;
    const skillDTO: SkillDTO = {
      name: this.skillNameUpdate,
      category: (this.selectedCategory) ? this.selectedCategory : this.selectedSkill.category
    };
    this.skillService.updateSkill(skillId, skillDTO).subscribe((response) => {
      this.skillNameUpdate = '';
      this.getAllSkills();
      this.clearCategoryRadio();
      console.log(response);
    });
  }

  deleteSkill(): void {
    if (this.selectedSkill == null) {
      this.showSkillDeleteFail = true;
    } else {
      const skillId = this.selectedSkill.skillId;

      const selectedSkillRadio = document.getElementById(`skill_${this.selectedSkill.skillId}`) as HTMLInputElement;
      selectedSkillRadio.checked = false;

      const selectedCategoryRadio = document.getElementById(`category_${this.selectedSkill.category.categoryId}`) as HTMLInputElement;
      selectedCategoryRadio.checked = false;

      this.skillService.deleteSkill(skillId).subscribe((response) => {
        this.getAllSkills();
      });
    }
    this.showAddSkill = false;
    this.showUpdateSkill = false;

  }

}
