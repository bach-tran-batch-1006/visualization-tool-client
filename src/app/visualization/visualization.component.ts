import { Component, OnInit } from '@angular/core';

import { VisualizationService } from '../services/visualization.service';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {

  visualizationId: number = 0;
  visualizations: Array<Object> = null;
  selected: number = 0;

  constructor(private visualizationService: VisualizationService) { }

  ngOnInit(): void {
    this.visualizationService.getAllVisualizations().subscribe((response) => {
      this.visualizations = response;
    });
  }

  changeVis(event): void {
    this.visualizationId = event.target.value;
  }

}
