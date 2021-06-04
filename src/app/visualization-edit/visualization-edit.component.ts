import { Component, Input, OnInit } from '@angular/core';
import { VisualizationService } from '../services/visualization.service';
import {Visualization} from '../models/Visualization'
import {CurriculumService} from "../services/curriculum.service";
import { Curriculum } from '../models/Curriculum';

@Component({
  selector: 'app-visualization-edit',
  templateUrl: './visualization-edit.component.html',
  styleUrls: ['./visualization-edit.component.css']
})
export class VisualizationEditComponent implements OnInit {

 vList:Array<Visualization>;
 cList: Array<Curriculum>;
 nameInput: string;
 
  constructor(private vservice: VisualizationService, private cservice:CurriculumService) { }

  ngOnInit(): void {

   this.vservice.getAllVisualizations().subscribe(
     (response) =>{
       this.vList= response;
       console.log(response);
     }
     
   )
  

  this.cservice.getAllCurriculum().subscribe(
    (response) =>{
      this.cList= response;
      console.log(response);
    }
  )
 }

 addVisualization(): void {
  let curricula: Curriculum[] = [];
  for (let i = 0; i < this.cList.length; i++) {
    let element = <HTMLInputElement> document.getElementById('checkbox' + i);
      if (element.checked) {
        curricula.push(this.cList[i]);
      }
  }
  console.log(curricula);
  this.vservice.addVisualization(this.nameInput, curricula).subscribe(
    (response) =>{
      console.log(response);
      this.vservice.getAllVisualizations();
    }
  )
 }

 ToggleCheckBox(e){
   console.log(e.target.value);
   this.vservice.getVisualizationById(e.target.value).subscribe(
     (response) => {
      //  console.log(response);
       for (let i = 0; i < this.cList.length; i++) {
        var element = <HTMLInputElement> document.getElementById('checkbox' + i);
        element.checked = false;
        // console.log(element);
       }
       for (let i = 0; i < response.curriculumList.length; i++) {
         for (let j = 0; j < this.cList.length; j++) {
          var element = <HTMLInputElement> document.getElementById('checkbox' + i);
           if (response.curriculumList[i].curriculumName == this.cList[j].curriculumName) {
            element.checked = true;
            console.log(element);
           }
         }
       }
     }
   )
  }
}
