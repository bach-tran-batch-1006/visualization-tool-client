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
import { PrimerComponent } from './primer/primer.component';
import { PrimerEditComponent } from './primer-edit/primer-edit.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from './services/confirmation-dialog.service';

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
    PrimerComponent,
    PrimerEditComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
    
  ],
  providers: [ ConfirmationDialogService],
  entryComponents: [ ConfirmationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
