import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerEditComponent } from './primer-edit.component';

describe('PrimerEditComponent', () => {
  let component: PrimerEditComponent;
  let fixture: ComponentFixture<PrimerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
