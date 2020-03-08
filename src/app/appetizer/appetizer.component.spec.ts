import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppetizerComponent } from './appetizer.component';

describe('AppetizerComponent', () => {
  let component: AppetizerComponent;
  let fixture: ComponentFixture<AppetizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppetizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppetizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
