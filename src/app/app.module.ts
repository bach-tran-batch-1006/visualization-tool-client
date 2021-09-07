import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { VisualizationEditComponent } from './visualization-edit/visualization-edit.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { SkillComponent } from './skill/skill.component';
import { CategoryComponent } from './category/category.component';
import { CurriculumEditComponent } from './curriculum-edit/curriculum-edit.component';
import { SkillCategoryEditComponent } from './skill-category-edit/skill-category-edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PrimerComponent } from './primer/primer.component';
import { PrimerEditComponent } from './primer-edit/primer-edit.component';
import { AddProjectToCurriculaComponent } from './add-project-to-curricula/add-project-to-curricula.component';
import { ProjectComponent } from './project/project.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizationComponent,
    VisualizationEditComponent,
    CurriculumComponent,
    SkillComponent,
    CategoryComponent,
    CurriculumEditComponent,
    SkillCategoryEditComponent,
    NavbarComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PrimerComponent,
    PrimerEditComponent,
    AddProjectToCurriculaComponent,
    ProjectComponent,
    ProjectEditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
