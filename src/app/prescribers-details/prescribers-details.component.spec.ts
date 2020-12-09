import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribersDetailsComponent } from './prescribers-details.component';

describe('PrescribersDetailsComponent', () => {
  let component: PrescribersDetailsComponent;
  let fixture: ComponentFixture<PrescribersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescribersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescribersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
