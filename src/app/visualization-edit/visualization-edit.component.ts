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

 

 ToggleCheckBox(e){
   console.log(e.target.value);
   
   
   }

}
