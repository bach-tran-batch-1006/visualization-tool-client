import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  visualizationId = 0;

  currentVisualization: Visualization;
  currentCurriculumList: Curriculum[] = null;
  selected = 0;

  distinctSkillList: Skill[] = [];
  distinctCategoryList: Category[] = [];

  currentCurriculumId: number;
  currentSkillList: Skill[] = [];

  categoryColorList: string[] = [];

  constructor(private visualizationService: VisualizationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.visualizationId = Number(this.route.snapshot.paramMap.get('id'));
    this.visualizationService.getVisualizationById(this.visualizationId).subscribe((response) => {
      this.currentVisualization = response;
      this.currentCurriculumList = response.curriculumList;
      if (this.currentCurriculumList.length !== 0) {
        this.changeCurriculumEvent(this.currentCurriculumList[0].curriculumId);
      }
    });
    this.visualizationService.getAllUniqueSkillsByVisualization(this.visualizationId).subscribe((response) => {
      this.distinctSkillList = response;
    });
    this.visualizationService.getAllUniqueCategoriesByVisualization(this.visualizationId).subscribe((response) => {
      this.distinctCategoryList = response;
      const total = Math.floor(360 / this.distinctCategoryList.length);
      for (let idx = 0; idx < this.distinctCategoryList.length; idx++) {
        this.categoryColorList.push(this.randColor(idx, total));
      }
    });
  }

  changeCurriculumEvent(currentCurriculumId: number): void {
    for (const curriculum of this.currentVisualization.curriculumList){
      if (currentCurriculumId === curriculum.curriculumId){
        this.currentSkillList = curriculum.skillList;
      }
    }
  }

  randColor(i: number, total: number): string {
    return 'hsl(' + i * total + ', 50%, 75%)';
  }

}
