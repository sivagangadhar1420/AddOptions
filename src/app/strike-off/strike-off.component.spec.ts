import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrikeOffComponent } from './strike-off.component';

describe('StrikeOffComponent', () => {
  let component: StrikeOffComponent;
  let fixture: ComponentFixture<StrikeOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrikeOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrikeOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
