import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit, OnChanges {

  @Input() visualizationId: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log("New visualizationId", this.visualizationId);
  }

}
