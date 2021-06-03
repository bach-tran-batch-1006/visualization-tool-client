import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumEditComponent } from './curriculum-edit/curriculum-edit.component';
import { SkillCategoryEditComponent } from './skill-category-edit/skill-category-edit.component';
import { VisualizationEditComponent } from './visualization-edit/visualization-edit.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo: '/edit/visualization', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent },
  { path: 'edit/curriculum', component: CurriculumEditComponent },
  { path: 'edit/skill-category', component: SkillCategoryEditComponent },
  { path: 'edit/visualization', component: VisualizationEditComponent },
  { path: 'visualization/:id', component: VisualizationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
