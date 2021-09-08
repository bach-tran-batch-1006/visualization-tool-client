import { Component, OnInit, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { Primer } from '../models/Primer';


@Component({
  selector: 'app-primer',
  templateUrl: './primer.component.html',
  //styleUrls: ['./primer.component.css']
})
export class PrimerComponent implements OnInit, OnChanges {

@Input() currentPrimerList: Primer[];
primerList: Primer[] = [];

@Output() currentPrimerId = new EventEmitter<number>();

  // primerId = 0;

  // currentPrimer: Primer;

  // selected = 0;

  // distinctSkillList: Skill[] = [];

  // //Might not need
  // distinctCategoryList: Category[] = [];


  // currentSkillList: Skill[] = [];

  // //Might not need
  // categoryColorList: string[] = [];

  constructor() { }
  ngOnChanges(): void {
    this.primerList = this.currentPrimerList;
  }

  ngOnInit(): void {
    this.currentPrimerList = [];

    }

    changeCurrentPrimer(primerId: number): void {
      this.currentPrimerId.emit(primerId);
    }


  }