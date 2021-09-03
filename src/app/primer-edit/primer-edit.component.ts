import { Component, OnInit } from '@angular/core';
import { Primer, PrimerDTO } from '../models/Primer';
import { Skill } from '../models/Skill';
import { SkillService } from '../services/skill.service';
import { PrimerService } from '../services/primer.service';

@Component({
  selector: 'app-primer-edit',
  templateUrl: './primer-edit.component.html',
  //styleUrls: ['./primer-edit.component.css']
})
export class PrimerEditComponent implements OnInit {

  primerList: Primer[] = [];
  selectedPrimer: Primer;

  showAddPrimer = false;
  showUpdatePrimer = false;

  showPrimerDeleteFail = false;

  primerNameAdd: string;
  primerNameUpdate: string;

  skillList: Skill[] = [];
  selectedSkillList: Skill[] = [];


  constructor(private primerService: PrimerService, private skillService: SkillService) { }

  ngOnInit(): void {
    this.getAllPrimer();
    this.getAllSkills();
  }

  getAllPrimer(): void {
    this.primerService.getAllPrimers().subscribe((response) => {
      this.primerList = response;
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


//EDIT VIS FOR PRIMER
  addPrimer(): Primer {
    let primer;
    this.selectedSkillList = [];
    const listSize = this.skillList.length;
    for (let index = 0; index < listSize; index++) {
      if (this.skillList[index].isActive) {
        this.selectedSkillList.push(this.skillList[index]);
      }
    } 
    const primerDTO: PrimerDTO = {
      name: this.primerNameAdd,
      skillList: this.selectedSkillList
    };
    this.primerService.addPrimer(primerDTO).subscribe((response) => {
      primer = response;
      this.getAllPrimer();
      this.resetSkillActive();
    });

    return primer;
  }


  //EDIT VIS FOR PRIMER
  updatePrimer(): Primer {
    let primer;
    this.selectedSkillList = [];
    const listSize = this.skillList.length;
    for (let index = 0; index < listSize; index++) {
      if (this.skillList[index].isActive) {
        this.selectedSkillList.push(this.skillList[index]);
      }
    }
    const primerId = this.selectedPrimer.primerId;
    const primerDTO: PrimerDTO = {
      name: this.primerNameUpdate,
      skillList: this.selectedSkillList
    };
    this.primerService.updatePrimer(primerId, primerDTO).subscribe((response) => {
      primer = response;
      this.primerNameUpdate = '';
      this.getAllPrimer();
      this.resetSkillActive();
    });
    return primer;
  }

  deletePrimer(): number {
    let result;
    if (this.selectedPrimer) {
      this.primerService.deletePrimer(this.selectedPrimer.primerId).subscribe((response) => {
        result = response;
        this.getAllPrimer();
        this.resetSkillActive();

      });
    } else {
      this.showPrimerDeleteFail = true;

    }
    return result;
  }

  displayPrimer(): void {

    this.showAddPrimer = false;
    this.showPrimerDeleteFail = false;
    this.resetSkillActive();
    this.primerNameUpdate = this.selectedPrimer.primerName;
    this.showUpdatePrimer = true;
    for (const skill of this.selectedPrimer.skillList) {
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


  toggleAddPrimer(): void {
    this.showPrimerDeleteFail = false;
    this.showUpdatePrimer = false;
    this.showAddPrimer = !this.showAddPrimer;

  }

  toggleUpdatePrimer(): void {
    this.showPrimerDeleteFail = false;
    this.showAddPrimer = false;
    this.showUpdatePrimer = !this.showUpdatePrimer;
  }


}
