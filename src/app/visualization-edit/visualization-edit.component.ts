import { Component, Input, OnInit } from '@angular/core';
import { VisualizationService } from '../services/visualization.service';
import {Visualization, VisualizationDTO} from '../models/Visualization'
import {CurriculumService} from "../services/curriculum.service";
import { Curriculum } from '../models/Curriculum';


@Component({
  selector: 'app-visualization-edit',
  templateUrl: './visualization-edit.component.html',
  styleUrls: ['./visualization-edit.component.css']
})
export class VisualizationEditComponent implements OnInit {

  visualizationList: Visualization[] = [];
  selectedVisualization: Visualization;

  showAddVisualization: boolean = false;
  showUpdateVisualization: boolean = false;

  showVisualizationDeleteFail: boolean = false;

  visualizationNameAdd: string;
  visualizationNameUpdate: string;

  curriculumList: Curriculum[] = [];
  selectedCurriculumList: Curriculum[] = [];
 
  constructor(private visualizationService: VisualizationService, private curriculumService: CurriculumService) { }

  ngOnInit(): void {
    this.getAllVisualization();
    this.getAllCurriculum();
  }

  getAllVisualization(){
    this.visualizationService.getAllVisualizations().subscribe((response) =>{
      this.visualizationList = response;
    });
  }

  getAllCurriculum(){
    this.curriculumService.getAllCurriculum().subscribe((response) => {
      this.curriculumList = response;
      this.curriculumList.sort((a, b) => (a.curriculumName.toLowerCase() > b.curriculumName.toLowerCase()) ? 1 : -1);
      let listSize = this.curriculumList.length;
      for (let index = 0; index < listSize; index++) {
        this.curriculumList[index].isActive = false;
      }
    });
  }

  addVisualization(){
    this.selectedCurriculumList = [];
    let listSize = this.curriculumList.length;
    for (let index = 0; index < listSize; index++) {
      if(this.curriculumList[index].isActive){
        this.selectedCurriculumList.push(this.curriculumList[index]);
      }
    }
    let visualizationDTO: VisualizationDTO = {
      title: this.visualizationNameAdd,
      curricula: this.selectedCurriculumList
    }
    this.visualizationService.addVisualization(visualizationDTO).subscribe((response) => {
      this.getAllVisualization();
    });
  }

  updateVisualization(){
    // Update Visualization Name works, need to fix curricula
    this.selectedCurriculumList = [];
    let listSize = this.curriculumList.length;
    for (let index = 0; index < listSize; index++) {
      if(this.curriculumList[index].isActive){
        this.selectedCurriculumList.push(this.curriculumList[index]);
      }
    }
    let visualizationId = this.selectedVisualization.visualizationId;
    let visualizationDTO: VisualizationDTO = {
      title: this.visualizationNameUpdate,
      curricula: this.selectedCurriculumList
    }
    console.log(visualizationDTO);
    this.visualizationService.updateVisualization(visualizationId,visualizationDTO).subscribe((response) => {
      this.getAllVisualization();
      this.resetCurriculumActive();
    });
  }

  deleteVisualization(){
    if(this.selectedVisualization){
      this.visualizationService.deleteVisualization(this.selectedVisualization.visualizationId).subscribe((response) => {
        this.getAllVisualization();
        this.getAllCurriculum();
      });
    } else {
      this.showVisualizationDeleteFail = true;
    }
  }

  displayVisualization(){

    this.showAddVisualization = false;
    this.showVisualizationDeleteFail = false;
    this.resetCurriculumActive();
    this.visualizationNameUpdate = this.selectedVisualization.visualizationName;
    this.showUpdateVisualization = true;
    for(let curriculum of this.selectedVisualization.curriculumList){
      let curriculumIndex = this.curriculumList.map(function(c) { return c.curriculumId; }).indexOf(curriculum.curriculumId);
      if(!this.curriculumList[curriculumIndex].isActive){
        this.selectedCurriculumList.push(this.curriculumList[curriculumIndex]);
      } else {
        this.selectedCurriculumList = this.selectedCurriculumList.filter(function(c) { return c.curriculumId != this.curriculumList[curriculumIndex].curriculumId; });
      }
      this.curriculumList[curriculumIndex].isActive = !this.curriculumList[curriculumIndex].isActive;
    }

  }

  toggleCurriculum(currentCurriculumId:number){
    let listSize = this.curriculumList.length;
    for (let index = 0; index < listSize; index++) {
      if(this.curriculumList[index].curriculumId == currentCurriculumId){
        if(!this.curriculumList[index].isActive){
          this.selectedCurriculumList.push(this.curriculumList[index]);
        } else {
          this.selectedCurriculumList = this.selectedCurriculumList.filter(function(c) { return c.curriculumId != currentCurriculumId; });
        }
        this.curriculumList[index].isActive = !this.curriculumList[index].isActive;
      }
    }
  }

  resetCurriculumActive() {
    for(let curriculum of this.curriculumList) {
      curriculum.isActive = false;
    }
    this.selectedCurriculumList = [];
  }

  toggleAddVisualization() {
    this.showVisualizationDeleteFail = false;
    this.showUpdateVisualization = false;
    this.showAddVisualization = !this.showAddVisualization;

  }

  toggleUpdateVisualization() {
    this.showVisualizationDeleteFail = false;
    this.showAddVisualization = false;
    this.showUpdateVisualization = !this.showUpdateVisualization;
  }

  // clearVisualization() {
  //   this.selectedVisualization = null;
  //   this.visualizationNameUpdate = null;
  //   this.resetCurriculumActive();
  // }

}