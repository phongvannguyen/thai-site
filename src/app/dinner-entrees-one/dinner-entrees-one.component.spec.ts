import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerEntreesOneComponent } from './dinner-entrees-one.component';

describe('DinnerEntreesOneComponent', () => {
  let component: DinnerEntreesOneComponent;
  let fixture: ComponentFixture<DinnerEntreesOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerEntreesOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerEntreesOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
