import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOptionsAndQuestionsComponent } from './add-options-and-questions.component';

describe('AddOptionsAndQuestionsComponent', () => {
  let component: AddOptionsAndQuestionsComponent;
  let fixture: ComponentFixture<AddOptionsAndQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOptionsAndQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOptionsAndQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
