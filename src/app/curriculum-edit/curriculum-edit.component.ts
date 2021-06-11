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

  showAddCurriculum = false;
  showUpdateCurriculum = false;

  showCurriculumDeleteFail = false;

  curriculumNameAdd: string;
  curriculumNameUpdate: string;

  skillList: Skill[] = [];
  selectedSkillList: Skill[] = [];

  constructor(private curriculumService: CurriculumService, private skillService: SkillService ) { }

  ngOnInit(): void {
    this.getAllCurriculum();
    this.getAllSkills();
  }

  getAllCurriculum(): void {
    this.curriculumService.getAllCurriculum().subscribe((response) => {
      this.curriculumList = response;
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

  addCurriculum(): Curriculum {
    let curriculum;
    this.selectedSkillList = [];
    const listSize = this.skillList.length;
    for (let index = 0; index < listSize; index++) {
      if (this.skillList[index].isActive) {
        this.selectedSkillList.push(this.skillList[index]);
      }
    }
    const curriculumDTO: CurriculumDTO = {
      name: this.curriculumNameAdd,
      skillList: this.selectedSkillList
    };
    this.curriculumService.addCurriculum(curriculumDTO).subscribe((response) => {
      curriculum = response;
      this.getAllCurriculum();
      this.resetSkillActive();
    });
    return curriculum;
  }

  updateCurriculum(): Curriculum {
    let curriculum;
    this.selectedSkillList = [];
    const listSize = this.skillList.length;
    for (let index = 0; index < listSize; index++) {
      if (this.skillList[index].isActive) {
        this.selectedSkillList.push(this.skillList[index]);
      }
    }
    const curriculumId = this.selectedCurriculum.curriculumId;
    const curriculumDTO: CurriculumDTO = {
      name: this.curriculumNameUpdate,
      skillList: this.selectedSkillList
    };
    this.curriculumService.updateCurriculum(curriculumId, curriculumDTO).subscribe((response) => {
      curriculum = response;
      this.curriculumNameUpdate = '';
      this.getAllCurriculum();
      this.resetSkillActive();
    });
    return curriculum;
  }

  deleteCurriculum(): number {
    let result;
    if (this.selectedCurriculum) {
      this.curriculumService.deleteCurriculum(this.selectedCurriculum.curriculumId).subscribe((response) => {
        result = response;
        this.getAllCurriculum();
        this.resetSkillActive();
      });
    } else {
      this.showCurriculumDeleteFail = true;
    }
    return result;
  }

  displayCurriculum(): void {
    this.showAddCurriculum = false;
    this.showCurriculumDeleteFail = false;
    this.resetSkillActive();
    this.curriculumNameUpdate = this.selectedCurriculum.curriculumName;
    this.showUpdateCurriculum = true;
    for (const skill of this.selectedCurriculum.skillList) {
      const skillIndex = this.skillList.map((s) => s.skillId).indexOf(skill.skillId);
      if (!this.skillList[skillIndex].isActive) {
        this.selectedSkillList.push(this.skillList[skillIndex]);
      } else {
        this.selectedSkillList = this.selectedSkillList.filter((s) => s.skillId !== this.skillList[skillIndex].skillId);
      }
      this.skillList[skillIndex].isActive = !this.skillList[skillIndex].isActive;
    }
  }

  toggleSkill(currentSkillId: number): void {
    const listSize = this.skillList.length;
    for (let index = 0; index < listSize; index++) {
      if (this.skillList[index].skillId === currentSkillId) {
        if (!this.skillList[index].isActive) {
          this.selectedSkillList.push(this.skillList[index]);
        } else {
          this.selectedSkillList = this.selectedSkillList.filter((s) => s.skillId !== currentSkillId);
        }
        this.skillList[index].isActive = !this.skillList[index].isActive;
      }
    }
  }

  resetSkillActive(): void {
    for (const skill of this.skillList) {
      skill.isActive = false;
    }
    this.selectedSkillList = [];
  }

  toggleAddCurriculum(): void {
    this.showCurriculumDeleteFail = false;
    this.showUpdateCurriculum = false;
    this.showAddCurriculum = !this.showAddCurriculum;

  }

  toggleUpdateCurriculum(): void {
    this.showCurriculumDeleteFail = false;
    this.showAddCurriculum = false;
    this.showUpdateCurriculum = !this.showUpdateCurriculum;
  }
}
