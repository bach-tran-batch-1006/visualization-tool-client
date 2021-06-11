import { Component, Input, OnChanges } from '@angular/core';

import { Skill } from 'src/app/models/Skill';
import { Category } from '../models/Category';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnChanges {

  @Input() visualizationId: number;
  @Input() curriculumId: number;
  @Input() currentSkillList: Skill[] = [];
  @Input() activeSkillList: Skill[] = [];
  @Input() categoryColorList: string[] = [];
  @Input() currentCategoryList: Category[] = [];

  skillList: Skill[] = [];

  constructor() { }

  ngOnChanges(): void {
    if (this.activeSkillList.length > 0) {
      this.highlightSkills();
    }
    for (const currentSkill of this.currentSkillList) {
      const categoryIdx = this.currentCategoryList.findIndex((category) => {
         return JSON.stringify(category) === JSON.stringify(currentSkill.category);
      });
      currentSkill.color = this.categoryColorList[categoryIdx];
    }
  }

  highlightSkills(): void {
    const listLength = this.currentSkillList.length;
    for (let i = 0; i < listLength; i++) {
      if (this.activeSkillList.some(skill => skill.skillId === this.currentSkillList[i].skillId)) {
        this.currentSkillList[i].isActive = true;
      } else {
        this.currentSkillList[i].isActive = false;
      }
    }
  }

}
