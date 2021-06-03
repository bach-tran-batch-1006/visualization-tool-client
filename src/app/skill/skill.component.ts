import { Component, OnInit, Input } from '@angular/core';

import { Skill } from 'src/app/models/Skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  
  @Input() curriculumId: number;
  @Input() currentSkillList: Skill[] = [];
  @Input() activeSkillList: Skill[] = [];
  skillList: Skill[] = [];

  @Input() visualizationId: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.activeSkillList.length > 0){
      this.highlightSkills();
    }
  }

  highlightSkills() {
    let listLength = this.currentSkillList.length;
    console.log("highlightSkills()")
    console.log(this.activeSkillList);
    for (let i = 0; i < listLength; i++) {
      if(this.activeSkillList.some(skill => skill.skillId === this.currentSkillList[i].skillId)){
        this.currentSkillList[i].isActive = true;
      } else {
        this.currentSkillList[i].isActive = false;
      }
      console.log(this.currentSkillList[i]);
    }
  }

}
