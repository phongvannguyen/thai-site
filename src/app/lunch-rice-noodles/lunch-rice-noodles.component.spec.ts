import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchRiceNoodlesComponent } from './lunch-rice-noodles.component';

describe('LunchRiceNoodlesComponent', () => {
  let component: LunchRiceNoodlesComponent;
  let fixture: ComponentFixture<LunchRiceNoodlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchRiceNoodlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchRiceNoodlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
