import { Component, OnInit } from '@angular/core';
import { VisualizationEditComponent } from '../visualization-edit/visualization-edit.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  title = 'myProject';
  buttonTitle:string = "CLICK ME!";
  visible:boolean = true;
  intro:boolean = true;

  visibleVisual:boolean =true;
  visibleVisual2:boolean =true;
  visibleMVisual:boolean=true;
  visibleMVisual2:boolean=true;
  visibleDVisual:boolean=true;
  visibleDVisual2:boolean=true;

  visibleCurric:boolean =true;
  visibleCurric2:boolean =true;
  visibleMCurric:boolean=true;
  visibleMCurric2:boolean=true;
  visibleDCurric:boolean=true;
  visibleDCurric2:boolean=true;

  visibleProject:boolean =true;
  visibleProject2:boolean =true;
  visibleMProject:boolean=true;
  visibleMProject2:boolean=true;
  visibleDProject:boolean=true;
  visibleDProject2:boolean=true;

  visibleSkills:boolean =true;
  visibleSkills2:boolean =true;
  visibleMSkills:boolean=true;
  visibleMSkills2:boolean=true;
  visibleDSkills:boolean=true;
  visibleDSkills2:boolean=true;

  visiblePrimers:boolean =true;
  visiblePrimers2:boolean =true;
  visibleMPrimers:boolean=true;
  visibleMPrimers2:boolean=true;
  visibleDPrimers:boolean=true;
  visibleDPrimers2:boolean=true;

  visibleCatego:boolean =true;

  // showhideUtility(){
  //   this.visible = this.visible?false:true;
  //   this.buttonTitle = this.visible?"Hide":"Show";
  // }

ngOnInit(){
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

  this.visibleCurric=false;
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

  this.visiblePrimers =false;
  this.visiblePrimers2 =false;
  this.visibleMPrimers=false;
  this.visibleMPrimers2=false;
  this.visibleDPrimers=false;
  this.visibleDPrimers=false;

  this.visibleCatego=false;
}

//Visual Manipulators
showVisual(){
  this.intro =false;
 this.visibleVisual = !this.visibleVisual;

  this.visibleVisual2=false;  
  this.visibleMVisual=false;
  this.visibleMVisual2=false;
  this.visibleDVisual=false;
  this.visibleDVisual2=false;

  this.visibleCurric=false;
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

  this.visiblePrimers =false;
  this.visiblePrimers2 =false;
  this.visibleMPrimers=false;
  this.visibleMPrimers2=false;
  this.visibleDPrimers=false;
  this.visibleDPrimers=false;

  this.visibleCatego=false;
}

showVisual2(){
  this.visibleVisual2 = true;
}
showMVisual(){
  this.intro =false;
  this.visibleVisual =false;
  this.visibleMVisual =true;
  this.visibleCurric =false;
  this.visibleProject =false;
  this.visibleSkills =false;
}
showMVisual2(){
  this.visibleMVisual2 = true;
}
showDVisual(){
  this.intro =false;
  this.visibleVisual =false;
  this.visibleDVisual =true;
  this.visibleCurric =false;
  this.visibleProject =false;
  this.visibleSkills =false;
}
showDVisual2(){
  this.visibleDVisual2 = true;
}

//Curriculum Manipulators
showCurric(){
  this.intro =false;
  this.visibleCurric = !this.visibleCurric;

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

//Project Manipulators
showProject(){
  this.intro =false;
  this.visibleProject = !this.visibleProject;
  
  this.visibleVisual=false;
  this.visibleVisual2=false;  
  this.visibleMVisual=false;
  this.visibleMVisual2=false;
  this.visibleDVisual=false;
  this.visibleDVisual2=false;

  this.visibleCurric=false;
  this.visibleCurric2=false;
  this.visibleMCurric=false;
  this.visibleMCurric2=false;
  this.visibleDCurric=false;
  this.visibleDCurric2=false;

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

//Skills Manipulators
showSkills(){
  this.intro =false;
  this.visibleSkills = !this.visibleSkills;

  this.visibleVisual=false;
  this.visibleVisual2=false;  
  this.visibleMVisual=false;
  this.visibleMVisual2=false;
  this.visibleDVisual=false;
  this.visibleDVisual2=false;

  this.visibleCurric=false;
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

  this.visibleSkills2 =false;
  this.visibleMSkills=false;
  this.visibleMSkills2=false;
  this.visibleDSkills=false;
  this.visibleDSkills2=false;

  this.visibleCatego=false;
}
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

//Primers Manipulators
showPrimers(){
  this.intro =false;
  this.visiblePrimers = !this.visiblePrimers;
  
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



//   showVisualization = false;
//   showPrimer =false;
//   showCurriculum = false;
//   showCategory = false;
//   showSkill = false;
//  // showProject=false;

//   showVisualizationForm=false;
//   showcurriculumForm=false;
//   showCategoryForm=false;
//   showSkillForm=false;
//   showProjectForm=false;
  

  constructor() { }



  // toggleVisualization(){
  //   this.showVisualization=!this.showVisualization;
  //   this.showPrimer=false;
  //   this.showCurriculum=false;
  // //  this.showProject=false;
  //   this.showCategory=false;
  //   this.showSkill=false;
  // }

  // togglePrimer(){
  //   this.showVisualization=false;
  //   this.showPrimer=!this.showPrimer;
  //   this.showCurriculum=false;
  //   //this.showProject=false;
  //   this.showCategory=false;
  //   this.showSkill=false;
  // }
  // toggleCurriculum(){
  //   this.showVisualization=false;
  //   this.showPrimer=false;
  //   this.showCurriculum=!this.showCurriculum;
  //  // this.showProject=false;
  //   this.showCategory=false;
  //   this.showSkill=false;
  // }
  // toggleCategory(){
  //   this.showVisualization=false;
  //   this.showPrimer=false;
  //   this.showCurriculum=false;
  // //  this.showProject=false;
  //   this.showCategory=!this.showCategory;
  //   this.showSkill=false;
  // }
  // toggleSkill(){
  //   this.showVisualization=false;
  //   this.showPrimer=false;
  //   this.showCurriculum=false;
  // //  this.showProject=false;
  //   this.showCategory=false;
  //   this.showSkill=!this.showSkill;
  // }

  // toggleProject(){
  //   this.showVisualization=false;
  //   this.showPrimer=false;
  //   this.showCurriculum=false;
  // //  this.showProject=!this.showProject;
  //   this.showCategory=false;
  //   this.showSkill=false;
  // }

  // toggleVisualizationForm(){
  //   this.showVisualizationForm=!this.showVisualizationForm;
  //   this.showcurriculumForm=false;
  // //  this.showProject=false;
  //   this.showCategory=false;
  //   this.showSkill=false;
  // }

  // toggleCirriculumForm(){
  //   this.showVisualization=!this.showVisualizationForm;
  //   this.showCurriculum=!this.showcurriculumForm;
  // //  this.showProject=false;
  //   this.showCategory=false;
  //   this.showSkill=false;
  // }

  // toggleProjectForm(){
  //   this.showVisualization=!this.showVisualizationForm;
  //   this.showCurriculum=!this.showcurriculumForm;
  // //  this.showProject=!this.showProject;
  //   this.showCategory=false;
  //   this.showSkill=false;
  // }

  // toggleCategoryForm(){
  //   this.showVisualization=!this.showVisualizationForm;
  //   this.showCurriculum=!this.showcurriculumForm;
  // //  this.showProject=!this.showProject;
  //   this.showCategory=!this.showCategory;
  //   this.showSkill=false;
  // }

  
}

 



