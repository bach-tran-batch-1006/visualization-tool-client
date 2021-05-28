import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationViewComponent } from './visualization-view.component';

describe('VisualizationViewComponent', () => {
  let component: VisualizationViewComponent;
  let fixture: ComponentFixture<VisualizationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
