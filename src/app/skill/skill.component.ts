import { Component, OnInit, Input } from '@angular/core';

import { Skill } from 'src/app/models/Skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  
  @Input() curriculumId: number;
  skillList: Skill[] = [];

  @Input() visualizationId: number;

  constructor() { }

  ngOnInit(): void {
    this.getSkillListByCurriculumId();
  }

  getSkillListByCurriculumId(): void {
    let skill1: Skill = {
      skillId: 1,
      skillName: "Algorithms",
      category: "Category"
    };
    let skill2: Skill = {
      skillId: 2,
      skillName: "Angular",
      category: "Category"
    };
    let skill3: Skill = {
      skillId: 3,
      skillName: "Object Oriented Programming",
      category: "Category"
    };
    this.skillList.push(skill1);
    this.skillList.push(skill2);
    this.skillList.push(skill3);
  }

}
