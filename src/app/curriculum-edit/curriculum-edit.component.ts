import { Component, OnInit } from '@angular/core';
import { Curriculum, CurriculumDTO } from '../models/Curriculum';
import { Skill } from '../models/Skill';
import { CurriculumService } from '../services/curriculum.service';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-curriculum-edit',
  templateUrl: './curriculum-edit.component.html',
  styleUrls: ['./curriculum-edit.component.css']
})
export class CurriculumEditComponent implements OnInit {

  curriculumList: Curriculum[] = [];
  selectedCurriculum: Curriculum;

  showAddCurriculum: boolean = false;
  showUpdateCurriculum: boolean = false;

  showCurriculumDeleteFail: boolean = false;

  curriculumNameAdd: string;
  curriculumNameUpdate: string;

  skillList: Skill[] = [];
  selectedSkillList: Skill[] = [];

  constructor(private curriculumService: CurriculumService, private skillService: SkillService ) { }

  ngOnInit(): void {
    this.getAllCurriculum();
    this.getAllSkills();
  }

  getAllCurriculum() {
    this.curriculumService.getAllCurriculum().subscribe((response) =>{
      this.curriculumList = response;
    });
  }

  getAllSkills() {
    this.skillService.getSkills().subscribe((response) => {
      this.skillList = response;
      this.skillList.sort((a, b) => (a.skillName.toLowerCase() > b.skillName.toLowerCase()) ? 1 : -1);
      let listSize = this.skillList.length;
      for (let index = 0; index < listSize; index++) {
        this.skillList[index].isActive = false;
      }
    });
  }

  addCurriculum() {
    this.selectedSkillList = [];
    let listSize = this.skillList.length;
    for (let index = 0; index < listSize; index++) {
      if(this.skillList[index].isActive){
        this.selectedSkillList.push(this.skillList[index]);
      }
    }
    let curriculumDTO: CurriculumDTO = {
      name: this.curriculumNameAdd,
      skillList: this.selectedSkillList
    }
    this.curriculumService.addCurriculum(curriculumDTO).subscribe((response) => {
      this.getAllCurriculum();
    });
  }

  updateCurriculum() {
    this.selectedSkillList = [];
    let listSize = this.skillList.length;
    for (let index = 0; index < listSize; index++) {
      if(this.skillList[index].isActive){
        this.selectedSkillList.push(this.skillList[index]);
      }
    }
    let curriculumId = this.selectedCurriculum.curriculumId;
    let curriculumDTO: CurriculumDTO = {
      name: this.selectedCurriculum.curriculumName,
      skillList: this.selectedSkillList
    }
    this.curriculumService.updateCurriculum(curriculumId,curriculumDTO).subscribe((response) => {
      this.getAllCurriculum();
    });
  }

  deleteCurriculum(){
    if(this.selectedCurriculum){
      this.curriculumService.deleteCurriculum(this.selectedCurriculum.curriculumId).subscribe((response) => {
        this.getAllCurriculum();
      });
    } else {
      this.showCurriculumDeleteFail = true;
    }
  }

  displayCurriculum() {
    // this.skillList = this.selectedCurriculum.skillList;
    this.showAddCurriculum = false;
    this.showCurriculumDeleteFail = false;
    this.resetSkillActive();
    this.curriculumNameUpdate = this.selectedCurriculum.curriculumName;
    this.showUpdateCurriculum = true;
    for(let skill of this.selectedCurriculum.skillList){
      let skillIndex = this.skillList.map(function(s) { return s.skillId; }).indexOf(skill.skillId);
      if(!this.skillList[skillIndex].isActive){
        this.selectedSkillList.push(this.skillList[skillIndex]);
      } else {
        this.selectedSkillList = this.selectedSkillList.filter(function(s) { return s.skillId != this.skillList[skillIndex].skillId; });
      }
      this.skillList[skillIndex].isActive = !this.skillList[skillIndex].isActive;
    }
  }

  toggleSkill(currentSkillId: number) {
    let listSize = this.skillList.length;
    for (let index = 0; index < listSize; index++) {
      if(this.skillList[index].skillId == currentSkillId){
        if(!this.skillList[index].isActive){
          this.selectedSkillList.push(this.skillList[index]);
        } else {
          this.selectedSkillList = this.selectedSkillList.filter(function(s) { return s.skillId != currentSkillId; });
        }
        this.skillList[index].isActive = !this.skillList[index].isActive;
      }
    }
  }

  resetSkillActive() {
    for(let skill of this.skillList) {
      skill.isActive = false;
    }
    this.selectedSkillList = [];
  }

  toggleAddCurriculum() {
    this.showCurriculumDeleteFail = false;
    this.showUpdateCurriculum = false;
    this.showAddCurriculum = !this.showAddCurriculum;

  }

  toggleUpdateCurriculum() {
    this.showCurriculumDeleteFail = false;
    this.showAddCurriculum = false;
    this.showUpdateCurriculum = !this.showUpdateCurriculum;
  }

  clearCurriculum() {
    this.selectedCurriculum = null;
    this.curriculumNameUpdate = null;
    this.resetSkillActive();
  }

}
