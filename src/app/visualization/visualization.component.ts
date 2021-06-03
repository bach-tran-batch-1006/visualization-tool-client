import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { Curriculum } from '../models/Curriculum';
import { Skill } from '../models/Skill';
import { Visualization } from '../models/Visualization';

import { VisualizationService } from '../services/visualization.service';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {

  visualizationId: number = 0;
  visualizations: Visualization[] = null;

  currentVisualization: Visualization;
  currentCurriculumList: Curriculum[] = null;
  selected: number = 0;

  duplicateSkillList: Skill[] = [];
  distinctSkillList: Skill[] = [];

  duplicateCategoryList: Category[] = [];
  distinctCategoryList: Category[] = [];

  currentCurriculumId: number;
  currentSkillList: Skill[] = [];

  constructor(private visualizationService: VisualizationService) { }

  ngOnInit(): void {
    this.visualizationService.getAllVisualizations().subscribe((response) => {
      this.visualizations = response;
    });
  }

  changeVis(event): void {
    this.visualizationId = event.target.value;
    for (let visualization of this.visualizations){
      if(visualization.visualizationId == this.visualizationId){
        this.currentVisualization = visualization;
      }
    }
    this.currentCurriculumList = this.currentVisualization.curriculumList;

    this.duplicateSkillList = [];
    this.duplicateCategoryList = [];
    this.distinctSkillList = [];
    this.distinctCategoryList = [];

    for (let curriculum of this.currentVisualization.curriculumList){
      this.duplicateSkillList.push.apply(this.duplicateSkillList, curriculum.skillList);
    }
    for (let skill of this.duplicateSkillList){
      this.duplicateCategoryList.push(skill.category);
    }
    this.distinctSkillList = this.duplicateSkillList.filter((skill, index, self) =>
      index === self.findIndex((t) => (
        t.skillId === skill.skillId
      ))
    )
    this.distinctCategoryList = this.duplicateCategoryList.filter((category, index, self) =>
      index === self.findIndex((t) => (
        t.categoryId === category.categoryId
      ))
    )
  }

  changeCurriculumEvent(currentCurriculumId: number) {
    for (let curriculum of this.currentVisualization.curriculumList){
      if( currentCurriculumId === curriculum.curriculumId){
        this.currentSkillList = curriculum.skillList;
        console.log(this.currentSkillList);
      }
    }
  }

}
