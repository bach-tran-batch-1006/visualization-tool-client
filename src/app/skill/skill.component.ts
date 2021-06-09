import { Component, OnInit, Input } from '@angular/core';

import { Skill } from 'src/app/models/Skill';
import { Category } from '../models/Category';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  
  @Input() visualizationId: number;
  @Input() curriculumId: number;
  @Input() currentSkillList: Skill[] = [];
  @Input() activeSkillList: Skill[] = [];
  @Input() categoryColorList: String[] = [];
  @Input() currentCategoryList: Category[] = [];

  skillList: Skill[] = [];

  constructor() { }

  ngOnChanges(): void {
    if(this.activeSkillList.length > 0){
      this.highlightSkills();
    }
    for (let i = 0; i < this.currentSkillList.length; i++) {
      let categoryIdx = this.currentCategoryList.findIndex((category) => {
         return JSON.stringify(category) === JSON.stringify(this.currentSkillList[i].category);
      });
      this.currentSkillList[i].color = this.categoryColorList[categoryIdx];
    }
  }

  highlightSkills() {
    let listLength = this.currentSkillList.length;
    for (let i = 0; i < listLength; i++) {
      if(this.activeSkillList.some(skill => skill.skillId === this.currentSkillList[i].skillId)){
        this.currentSkillList[i].isActive = true;
      } else {
        this.currentSkillList[i].isActive = false;
      }
    }
  }

}
