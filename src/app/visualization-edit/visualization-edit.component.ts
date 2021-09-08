import { Component, OnInit } from '@angular/core';
import { VisualizationService } from '../services/visualization.service';
import { Visualization, VisualizationDTO } from '../models/Visualization';
import { CurriculumService } from '../services/curriculum.service';
import { Curriculum } from '../models/Curriculum';
import { Primer } from '../models/Primer';
import { PrimerService } from '../services/primer.service';


@Component({
  selector: 'app-visualization-edit',
  templateUrl: './visualization-edit.component.html'
  //styleUrls: ['./visualization-edit.component.css']
})
export class VisualizationEditComponent implements OnInit {

  visible:boolean = true;
  intro:boolean = true;

  visibleVisual:boolean =false;
  visibleVisual2:boolean =false;
  visibleMVisual:boolean=false;
  visibleMVisual2:boolean=false;
  visibleDVisual:boolean=false;
  visibleDVisual2:boolean=false;


  visualizationList: Visualization[] = [];
  selectedVisualization: Visualization;
  showAddVisualization = false;
  showUpdateVisualization = false;
  showVisualizationDeleteFail = false;
  showViewVisualizationFail = false;
  visualizationNameAdd: string;
  visualizationNameUpdate: string;


  curriculumList: Curriculum[] = [];
  selectedCurriculumList: Curriculum[] = [];

   primerList: Primer[] = [];
   selectedPrimerList: Primer[] = [];


  constructor(private visualizationService: VisualizationService, private curriculumService: CurriculumService) { }

  ngOnInit(): void {
    this.getAllVisualization();
    this.getAllCurriculum();
    //this.visualReset();
  }

// ********** VISUAL MANIPULATORS **********
  visualReset(){
    this.intro=true;
  
    this.visibleVisual=false;
    this.visibleVisual2=false;  
    this.visibleMVisual=false;
    this.visibleMVisual2=false;
    this.visibleDVisual=false;
    this.visibleDVisual2=false;
    
  }  

  showVisual(){
    this.intro =false;
    this.visibleVisual =true;
  
    this.visibleVisual2=false;  
    this.visibleMVisual=false;
    this.visibleMVisual2=false;
    this.visibleDVisual=false;
    this.visibleDVisual2=false;
  }

  showVisual2(){
    this.visibleVisual2 = true;
  }
 

  showMVisual(){
    this.intro =false;
    this.visibleVisual =false;
    this.visibleMVisual =true;

  }

  showMVisual2(){
    this.visibleMVisual2 = true;
  }
  showDVisual(){
    this.intro =false;
    this.visibleVisual =false;
    this.visibleDVisual =true;

  }
  showDVisual2(){
    this.visibleDVisual2 = true;
  }


// ********** VISUAL METHODS **********

  getAllVisualization(): void {
    this.visualizationService.getAllVisualizations().subscribe((response) => {
      this.visualizationList = response;
    });
  }
  getAllCurriculum(): void {
    this.curriculumService.getAllCurriculum().subscribe((response) => {
      this.curriculumList = response;
      this.curriculumList.sort((a, b) => (a.curriculumName.toLowerCase() > b.curriculumName.toLowerCase()) ? 1 : -1);
      const listSize = this.curriculumList.length;
      for (let index = 0; index < listSize; index++) {
        this.curriculumList[index].isActive = false;
      }
    });
  }
  addVisualization(): Visualization {
    let visualization;
    this.selectedCurriculumList = [];
    const listSize = this.curriculumList.length;
    for (let index = 0; index < listSize; index++) {
      if (this.curriculumList[index].isActive) {
        this.selectedCurriculumList.push(this.curriculumList[index]);
      }
    }
    const visualizationDTO: VisualizationDTO = {
      title: this.visualizationNameAdd,
      curricula: this.selectedCurriculumList,
      primer: this.selectedPrimerList
    };
    this.visualizationService.addVisualization(visualizationDTO).subscribe((response) => {
      visualization = response;
      this.getAllVisualization();
      this.resetCurriculumActive();
    });
    return visualization;
  }
  updateVisualization(): Visualization {
    let visualization;
    this.selectedCurriculumList = [];
    const listSize = this.curriculumList.length;
    for (let index = 0; index < listSize; index++) {
      if (this.curriculumList[index].isActive) {
        this.selectedCurriculumList.push(this.curriculumList[index]);
      }
    }
    const visualizationId = this.selectedVisualization.visualizationId;
    const visualizationDTO: VisualizationDTO = {
      title: this.visualizationNameUpdate,
      curricula: this.selectedCurriculumList,
      primer: this.selectedPrimerList
    };
    this.visualizationService.updateVisualization(visualizationId, visualizationDTO).subscribe((response) => {
      visualization = response;
      this.visualizationNameUpdate = '';
      this.getAllVisualization();
      this.resetCurriculumActive();
    });
    return visualization;
  }
  deleteVisualization(): number {
    let result;
    if (this.selectedVisualization) {
      this.visualizationService.deleteVisualization(this.selectedVisualization.visualizationId).subscribe((response) => {
        result = response;
        this.getAllVisualization();
        this.getAllCurriculum();
      });
    } else {
      this.showVisualizationDeleteFail = true;
      this.showViewVisualizationFail = false;
    }
    return result;
  }
  displayVisualization(): void {
    this.showAddVisualization = false;
    this.showVisualizationDeleteFail = false;
    this.showViewVisualizationFail = false;
    this.resetCurriculumActive();
    this.visualizationNameUpdate = this.selectedVisualization.visualizationName;
    this.showUpdateVisualization = true;
    for (const curriculum of this.selectedVisualization.curriculumList) {
      const curriculumIndex = this.curriculumList.map((c) => c.curriculumId).indexOf(curriculum.curriculumId);
      if (!this.curriculumList[curriculumIndex].isActive) {
        this.selectedCurriculumList.push(this.curriculumList[curriculumIndex]);
      } else {
        this.selectedCurriculumList = this.selectedCurriculumList.filter((c) =>
          c.curriculumId !== this.curriculumList[curriculumIndex].curriculumId);
      }
      this.curriculumList[curriculumIndex].isActive = !this.curriculumList[curriculumIndex].isActive;
    }
  }
  toggleCurriculum(currentCurriculumId: number): void {
    const listSize = this.curriculumList.length;
    for (let index = 0; index < listSize; index++) {
      if (this.curriculumList[index].curriculumId === currentCurriculumId) {
        if (!this.curriculumList[index].isActive) {
          this.selectedCurriculumList.push(this.curriculumList[index]);
        } else {
          this.selectedCurriculumList = this.selectedCurriculumList.filter((c) => c.curriculumId !== currentCurriculumId);
        }
        this.curriculumList[index].isActive = !this.curriculumList[index].isActive;
      }
    }
  }
  resetCurriculumActive(): void {
    for (const curriculum of this.curriculumList) {
      curriculum.isActive = false;
    }
    this.selectedCurriculumList = [];
  }

  // resetPrimerActive(): void {
  //   for (const primer of this.primerList) {
  //     primer.isActive = false;
  //   }
  //   this.selectedPrimerList = [];
  // }

  toggleAddVisualization(): void {
    this.showVisualizationDeleteFail = false;
    this.showViewVisualizationFail = false;
    this.showUpdateVisualization = false;
    this.showAddVisualization = !this.showAddVisualization;
    this.resetCurriculumActive();
  }
  toggleUpdateVisualization(): void {
    this.showVisualizationDeleteFail = false;
    this.showViewVisualizationFail = false;
    this.showAddVisualization = false;
    this.showUpdateVisualization = !this.showUpdateVisualization;
  }
  viewVisualization(): void {
    if (this.selectedVisualization) {
      window.open(`/visualization/${this.selectedVisualization.visualizationId}`);
    } else {
      this.showViewVisualizationFail = true;
      this.showVisualizationDeleteFail = false;
    }
  }


}
