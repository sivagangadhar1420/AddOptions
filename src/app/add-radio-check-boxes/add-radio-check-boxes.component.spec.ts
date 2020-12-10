import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRadioCheckBoxesComponent } from './add-radio-check-boxes.component';

describe('AddRadioCheckBoxesComponent', () => {
  let component: AddRadioCheckBoxesComponent;
  let fixture: ComponentFixture<AddRadioCheckBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRadioCheckBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRadioCheckBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
