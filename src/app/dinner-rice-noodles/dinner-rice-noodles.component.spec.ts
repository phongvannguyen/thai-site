import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerRiceNoodlesComponent } from './dinner-rice-noodles.component';

describe('DinnerRiceNoodlesComponent', () => {
  let component: DinnerRiceNoodlesComponent;
  let fixture: ComponentFixture<DinnerRiceNoodlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerRiceNoodlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerRiceNoodlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
