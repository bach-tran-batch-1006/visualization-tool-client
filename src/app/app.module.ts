import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { VisualizationViewComponent } from './visualization-view/visualization-view.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { CurriculumAddComponent } from './curriculum-add/curriculum-add.component';
import { CurriculumUpdateComponent } from './curriculum-update/curriculum-update.component';
import { SkillComponent } from './skill/skill.component';
import { SkillAddComponent } from './skill-add/skill-add.component';
import { SkillUpdateComponent } from './skill-update/skill-update.component';
import { CategoryComponent } from './category/category.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizationComponent,
    VisualizationViewComponent,
    CurriculumComponent,
    CurriculumAddComponent,
    CurriculumUpdateComponent,
    SkillComponent,
    SkillAddComponent,
    SkillUpdateComponent,
    CategoryComponent,
    CategoryAddComponent,
    CategoryUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
