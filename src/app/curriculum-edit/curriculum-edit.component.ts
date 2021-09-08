import { Component, OnInit } from '@angular/core';

import { Curriculum, CurriculumDTO } from '../models/Curriculum';
import { Skill } from '../models/Skill';
import { CurriculumService } from '../services/curriculum.service';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-curriculum-edit',
  templateUrl: './curriculum-edit.component.html'
  // styleUrls: ['./curriculum-edit.component.css']
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

  constructor(private curriculumService: CurriculumService, private skillService: SkillService ) { }

// ********** CURRICULUM MANIPULATORS **********

visualReset(){
  this.intro=true;

  this.visibleCurric=false;
  this.visibleCurric2=false;
  this.visibleMCurric=false;
  this.visibleMCurric2=false;
  this.visibleDCurric=false;
  this.visibleDCurric2=false;
  
}  
showCurric(){
  this.intro =false;
  this.visibleCurric =true;

  this.visibleVisual=false;
  this.visibleVisual2=false;  
  this.visibleMVisual=false;
  this.visibleMVisual2=false;
  this.visibleDVisual=false;
  this.visibleDVisual2=false;

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
showCurric2(){
this.visibleCurric2 =true;
this.visibleProject =true;
}
showMCurric(){
  this.intro =false;
  this.visibleVisual =false;
  this.visibleCurric =false;
  this.visibleMCurric =true;
  this.visibleProject =false;
  this.visibleSkills =false;
}
showMCurric2(){
this.visibleMCurric2 =true;
}
showDCurric(){
  this.intro =false;
  this.visibleVisual =false;
  this.visibleCurric =false;
  this.visibleDCurric =true;
  this.visibleProject =false;
  this.visibleSkills =false;
}
showDCurric2(){
this.visibleDCurric2 =true;
}

// ********** PROJECT MANIPULATORS **********

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

  ngOnInit(): void {
    this.getAllCurriculum();
    this.getAllSkills();
    this.visualReset();
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
