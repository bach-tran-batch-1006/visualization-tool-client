import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumEditComponent } from './curriculum-edit/curriculum-edit.component';
import { SkillCategoryEditComponent } from './skill-category-edit/skill-category-edit.component';
import { VisualizationEditComponent } from './visualization-edit/visualization-edit.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrimerComponent } from './primer/primer.component';
import { PrimerEditComponent } from './primer-edit/primer-edit.component';
import {  ProjectComponent} from "./project/project.component";
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent},
  { path: 'navbar', component: NavbarComponent },
  { path: 'edit/curriculum', component: CurriculumEditComponent },
  { path: 'edit/skill-category', component: SkillCategoryEditComponent },
  { path: 'edit/visualization', component: VisualizationEditComponent },
  { path: 'visualization/:id', component: VisualizationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'visualization/:id', component: VisualizationComponent },
  { path: 'primer', component: PrimerComponent},
  { path: 'edit/primer', component: PrimerEditComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'project', component: ProjectComponent},
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
