import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { Project } from 'src/app/models/Project';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnChanges{
  
  @Input() currentProjectList: Project[];
  projectList: Project[] = [];
  @Output() currentProjectId = new EventEmitter<number>();
  
  
  constructor() { }

  ngOnInit(): void {
    this.currentProjectList = [];
  }

  ngOnChanges(): void {
    this.projectList = this.currentProjectList;
  }

  changeCurrentProject(projectId: number): void {
    this.currentProjectId.emit(projectId);
  }

}
