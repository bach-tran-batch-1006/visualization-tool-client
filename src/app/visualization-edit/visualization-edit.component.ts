import { Component, Input, OnInit } from '@angular/core';
import { VisualizationService } from '../services/visualization.service';
import {Visualization} from '../models/Visualization'
import {CurriculumService} from "../services/curriculum.service";
import { Curriculum } from '../models/Curriculum';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-visualization-edit',
  templateUrl: './visualization-edit.component.html',
  styleUrls: ['./visualization-edit.component.css']
})
export class VisualizationEditComponent implements OnInit {

 vList:Array<Visualization>=[];
 cList: Array<Curriculum> =[];
 nameInput: string;
 Vcurlist: Array<Curriculum>=[];
 CheckCurList: Array<Curriculum> = [];
 CheckCurListIndex: Array<string> = [];
 ActiveVs: Visualization;
 
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

 ToggleCheckBox(e, visualization: Visualization){
   console.log(e.target.value);

   this.ActiveVs= visualization;
   this.vservice.getVisualizationById(e.target.value).subscribe(
     (response) => {
        let vNameElement=  <HTMLInputElement> document.getElementById("vsname");
        vNameElement.value= visualization.visualizationName;
        this.Vcurlist= response.curriculumList;
        console.log("Visualization currilulmlist " ,this.Vcurlist);
       for (let i = 0; i < this.cList.length; i++) {
        var element = <HTMLInputElement> document.getElementById(this.cList[i].curriculumId.toString());
        element.checked = false;
        // console.log(element);
       }

       //reset the check list of Curriculum
        this.CheckCurList=[];
        this.CheckCurListIndex=[];
       
         for (let j = 0; j < this.Vcurlist.length; j++) {
          var element = <HTMLInputElement> document.getElementById(this.Vcurlist[j].curriculumId.toString());
           if (element!=null || element!=undefined ) {
            element.checked = true;
            this.CheckCurList.push(this.Vcurlist[j]);
            this.CheckCurListIndex.push( this.Vcurlist[j].curriculumId.toString());
            console.log(element);
           }
         }
         console.log(" checked currentlist " , this.CheckCurList);
     }
   )
  
  }


  ClickCheckBox(e, curriculum: Curriculum){
    let exist=0;
    let checkboxstate= e.target.checked;
    let index= this.CheckCurListIndex.indexOf(curriculum.curriculumId.toString());
    console.log("The index " , index);

 
    if(checkboxstate)
    {
       if(index===-1)
       {
         this.CheckCurList.push(curriculum);
         this.CheckCurListIndex.push(curriculum.curriculumId.toString());
         console.log("adding curriculium " , curriculum);
       }
    

    }

    if(checkboxstate===false)
    {
      console.log("false");
      // unselected and the curriculum exist in the list then remove it 


      if(index!=-1 &&  (index === (this.CheckCurList.length-1) ))
      {
          this.CheckCurList.pop();
          this.CheckCurListIndex.pop();
          exist=1;
          console.log("removing curriculum ", curriculum);
      }

        if(index!=-1 && exist===0)
        {
            this.CheckCurList.splice(-index, 1);
            this.CheckCurListIndex.splice(-index,1);
            console.log("removing curriculum ", curriculum);
            
        }
    
  }
    console.log( "state of checklist " , this.CheckCurList);
}



updateVS(){
  let vNameElement=  <HTMLInputElement> document.getElementById("vsname");

if(this.ActiveVs!=undefined)
this.vservice.updateVisualization(this.ActiveVs.visualizationId, vNameElement.value, this.CheckCurList).subscribe(
  (response) =>{
      for(let i=0; i<this.vList.length; i++)
      {
            if(this.vList[i].visualizationId === this.ActiveVs.visualizationId)
            {
              this.vList[i]= response;
              this.ActiveVs= response;
              break;
            }
    }
    
  }
  
)
}

}
