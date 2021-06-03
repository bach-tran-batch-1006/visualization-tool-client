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
    // this.getSkillListByCurriculumId();
  }

  ngOnChanges(): void {
    // console.log("New visualizationId", this.visualizationId);
    // console.log("New currentCurriculumList: ", this.currentCurriculumList);
    // this.curriculumList = this.currentCurriculumList;
    // for(let skill of this.activeSkillList){
    //   console.log("Skill component: ");
    //   console.log(skill);
    // }
    if(this.activeSkillList.length > 0){
      this.highlightSkills();
    }
  }

  highlightSkills() {
    let listLength = this.currentSkillList.length;
    console.log("highlightSkills()")
    console.log(this.activeSkillList);
    for (let i = 0; i < listLength; i++) {
      // console.log("IndexOf() found : "+this.activeSkillList.indexOf(this.currentSkillList[i]));
      if(this.activeSkillList.some(skill => skill.skillId === this.currentSkillList[i].skillId)){
        this.currentSkillList[i].isActive = true;
      } else {
        this.currentSkillList[i].isActive = false;
      }
      // if(this.activeSkillList.indexOf(this.currentSkillList[i]) >= 0){
      //   this.currentSkillList[i].isActive = true;
      // } else {
      //   this.currentSkillList[i].isActive = false;
      // }
      console.log(this.currentSkillList[i]);
    }
  }

  // getSkillListByCurriculumId(): void {
  //   let skill1: Skill = {
  //     skillId: 1,
  //     skillName: "Algorithms",
  //     category: {
  //       categoryId:1,
  //       categoryName:"Language",
  //       categoryDescription:"Programming Language",
  //       categoryColor:"#e59372"
  //     }
  //   };
  //   let skill2: Skill = {
  //     skillId: 2,
  //     skillName: "Angular",
  //     category: {
  //       categoryId:1,
  //       categoryName:"Language",
  //       categoryDescription:"Programming Language",
  //       categoryColor:"#e59372"
  //     }
  //   };
  //   let skill3: Skill = {
  //     skillId: 3,
  //     skillName: "Object Oriented Programming",
  //     category: {
  //       categoryId:1,
  //       categoryName:"Language",
  //       categoryDescription:"Programming Language",
  //       categoryColor:"#e59372"
  //     }
  //   };
  //   this.skillList.push(skill1);
  //   this.skillList.push(skill2);
  //   this.skillList.push(skill3);
  // }

}
