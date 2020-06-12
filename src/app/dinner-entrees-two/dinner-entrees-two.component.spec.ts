import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerEntreesTwoComponent } from './dinner-entrees-two.component';

describe('DinnerEntreesTwoComponent', () => {
  let component: DinnerEntreesTwoComponent;
  let fixture: ComponentFixture<DinnerEntreesTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerEntreesTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerEntreesTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
