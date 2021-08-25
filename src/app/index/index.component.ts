import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  showVisualization = false;
  showPrimer =false;
  showCurriculum = false;
  showCategory = false;
  showSkill = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleVisualization(){
    this.showVisualization=!this.showVisualization;
    this.showPrimer=false;
    this.showCurriculum=false;
    this.showCategory=false;
    this.showSkill=false;
  }

  togglePrimer(){
    this.showVisualization=false;
    this.showPrimer=!this.showPrimer;
    this.showCurriculum=false;
    this.showCategory=false;
    this.showSkill=false;
  }
  toggleCurriculum(){
    this.showVisualization=false;
    this.showPrimer=false;
    this.showCurriculum=!this.showCurriculum;
    this.showCategory=false;
    this.showSkill=false;
  }
  toggleCategory(){
    this.showVisualization=false;
    this.showPrimer=false;
    this.showCurriculum=false;
    this.showCategory=!this.showCategory;
    this.showSkill=false;
  }
  toggleSkill(){
    this.showVisualization=false;
    this.showPrimer=false;
    this.showCurriculum=false;
    this.showCategory=false;
    this.showSkill=!this.showSkill;
  }

}
