import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

import { Curriculum } from 'src/app/models/Curriculum';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit, OnChanges {
  
  @Input() currentCurriculumList: Curriculum[];
  curriculumList: Curriculum[] = [];
  exist:boolean = true;

  @Output() currentCurriculumId = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.currentCurriculumList=[];
  }

  ngOnChanges(): void {
    this.curriculumList = this.currentCurriculumList;
  }

  changeCurrentCurriculum(curriculumId: number) {
    this.currentCurriculumId.emit(curriculumId);
  }

}
