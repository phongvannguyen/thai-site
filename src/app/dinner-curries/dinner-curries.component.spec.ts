import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerCurriesComponent } from './dinner-curries.component';

describe('DinnerCurriesComponent', () => {
  let component: DinnerCurriesComponent;
  let fixture: ComponentFixture<DinnerCurriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerCurriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerCurriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
