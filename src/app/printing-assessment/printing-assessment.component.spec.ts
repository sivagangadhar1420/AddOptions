import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingAssessmentComponent } from './printing-assessment.component';

describe('PrintingAssessmentComponent', () => {
  let component: PrintingAssessmentComponent;
  let fixture: ComponentFixture<PrintingAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
