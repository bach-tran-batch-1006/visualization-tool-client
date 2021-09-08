import { Component, OnInit } from '@angular/core';
import { Primer, PrimerDTO } from '../models/Primer';
import { Skill } from '../models/Skill';
import { SkillService } from '../services/skill.service';
import { PrimerService } from '../services/primer.service';

@Component({
  selector: 'app-primer-edit',
  templateUrl: './primer-edit.component.html'
  //styleUrls: ['./primer-edit.component.css']
})
export class PrimerEditComponent implements OnInit {

  visible:boolean = true;
  intro:boolean = true;

  primerList: Primer[] = [];
  selectedPrimer: Primer;

  showAddPrimer = false;
  showUpdatePrimer = false;

  showPrimerDeleteFail = false;

  primerNameAdd: string;
  primerNameUpdate: string;

  skillList: Skill[] = [];
  selectedSkillList: Skill[] = [];

  visibleVisual:boolean =false;
  visibleVisual2:boolean =false;
  visibleMVisual:boolean=false;
  visibleMVisual2:boolean=false;
  visibleDVisual:boolean=false;
  visibleDVisual2:boolean=false;

  visibleSkills:boolean =false;
  visibleSkills2:boolean =false;
  visibleMSkills:boolean=false;
  visibleMSkills2:boolean=false;
  visibleDSkills:boolean=false;
  visibleDSkills2:boolean=false;

  visiblePrimers:boolean =true;
  visiblePrimers2:boolean =true;
  visibleMPrimers:boolean=true;
  visibleMPrimers2:boolean=true;
  visibleDPrimers:boolean=true;
  visibleDPrimers2:boolean=true;


  constructor(private primerService: PrimerService, private skillService: SkillService) { }

  ngOnInit(): void {
    this.getAllPrimer();
    this.getAllSkills();
    this.visualReset();
  }

  visualReset(){
    this.intro=true;
  
    this.visibleVisual=false;
    this.visibleVisual2=false;  
    this.visibleMVisual=false;
    this.visibleMVisual2=false;
    this.visibleDVisual=false;
    this.visibleDVisual2=false;
  
    this.visibleSkills=false;
    this.visibleSkills2 =false;
    this.visibleMSkills=false;
    this.visibleMSkills2=false;
    this.visibleDSkills=false;
    this.visibleDSkills2=false;
  
    this.visiblePrimers =false;
    this.visiblePrimers2 =false;
    this.visibleMPrimers=false;
    this.visibleMPrimers2=false;
    this.visibleDPrimers=false;
    this.visibleDPrimers=false;
  }


showPrimers(){
  this.intro =false;
  this.visiblePrimers = true;
  
  this.visibleVisual=false;
  this.visibleVisual2=false;  
  this.visibleMVisual=false;
  this.visibleMVisual2=false;
  this.visibleDVisual=false;
  this.visibleDVisual2=false;

  this.visibleSkills=false;
  this.visibleSkills2 =false;
  this.visibleMSkills=false;
  this.visibleMSkills2=false;
  this.visibleDSkills=false;
  this.visibleDSkills2=false;

  this.visiblePrimers =false;
  this.visiblePrimers2 =false;
  this.visibleMPrimers=false;
  this.visibleMPrimers2=false;
  this.visibleDPrimers=false;
  this.visibleDPrimers=false;
}
showPrimer2(){
this.visiblePrimers2 =true;
this.visibleSkills =true;
}
showMPrimer(){
  this.intro =false;
  this.visibleVisual =false;
  this.visiblePrimers=false;
  this.visibleMPrimers =true;
  this.visibleSkills =false;
}
showMPrimer2(){
this.visibleMPrimers2 =true;
}
showDPrimer(){
  this.intro =false;
  this.visibleVisual =false;
  this.visiblePrimers =false;
  this.visibleDPrimers =true;
  this.visibleSkills =false;
}
showDPrimer2(){
this.visibleDPrimers2 =true;
}
hidePrimer() {
  this.visiblePrimers2 =false;
  this.visibleMPrimers=false;
  this.visibleMPrimers2=false;
  this.visibleDPrimers=false;
  this.visibleDPrimers2=false;
  this.visibleSkills =false;
}

  // ********** SKILLS MANIPULATORS **********
  showSkills2(){
  this.visibleSkills2 =true;
  }
  showMSkills(){
    this.intro =false;
    this.visibleVisual =false;
    this.visibleSkills =false;
    this.visibleMSkills =true;
  }
  showMSkills2(){
  this.visibleMSkills2 =true;
  }
  showDSkills(){
    this.intro =false;
    this.visibleVisual =false;
    this.visibleSkills =false;
    this.visibleDSkills =true;
  }
  showDSkills2(){
  this.visibleDSkills2 =true;
  }
  hideSkills(){
    this.visibleSkills2 =false;
  
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
