import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationEditComponent } from './visualization-edit.component';

describe('VisualizationEditComponent', () => {
  let component: VisualizationEditComponent;
  let fixture: ComponentFixture<VisualizationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizationEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
