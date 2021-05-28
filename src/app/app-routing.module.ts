import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { SkillComponent } from './skill/skill.component';
import { VisualizationViewComponent } from './visualization-view/visualization-view.component';
import { VisualizationComponent } from './visualization/visualization.component';

const routes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'visualization', component: VisualizationComponent },
  { path: 'visualization/:id', component: VisualizationViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
