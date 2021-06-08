import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VisualizationEditComponent } from './visualization-edit.component';

describe('VisualizationEditComponent', () => {
  let component: VisualizationEditComponent;
  let fixture: ComponentFixture<VisualizationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizationEditComponent ],
      imports: [HttpClientTestingModule],
      providers: [VisualizationEditComponent],
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
