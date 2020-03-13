import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchCurriesComponent } from './lunch-curries.component';

describe('LunchCurriesComponent', () => {
  let component: LunchCurriesComponent;
  let fixture: ComponentFixture<LunchCurriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchCurriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchCurriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
