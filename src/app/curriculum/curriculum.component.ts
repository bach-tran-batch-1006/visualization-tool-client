import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { Curriculum } from 'src/app/models/Curriculum';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit, OnChanges {

  @Input() visualizationId: number;
  curriculumList: Curriculum[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getCurriculumListByVisualizationId();
  }

  getCurriculumListByVisualizationId(): void {
    let curriculum1: Curriculum = {
      curriculumId: 1,
      curriculumName: "Java With Automation",
      skillList: ["JUnit"]
    };
    let curriculum2: Curriculum = {
      curriculumId: 2,
      curriculumName: "Microservices",
      skillList: [""]
    };
    let curriculum3: Curriculum = {
      curriculumId: 3,
      curriculumName: "Backend Developer",
      skillList: [""]
    };
    this.curriculumList.push(curriculum1);
    this.curriculumList.push(curriculum2);
    this.curriculumList.push(curriculum3);
  }

  ngOnChanges(): void {
    console.log("New visualizationId", this.visualizationId);
  }

}
