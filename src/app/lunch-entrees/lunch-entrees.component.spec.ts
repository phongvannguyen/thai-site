import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchEntreesComponent } from './lunch-entrees.component';

describe('LunchEntreesComponent', () => {
  let component: LunchEntreesComponent;
  let fixture: ComponentFixture<LunchEntreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchEntreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchEntreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
