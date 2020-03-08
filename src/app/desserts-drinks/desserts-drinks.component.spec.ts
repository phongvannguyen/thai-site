import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertsDrinksComponent } from './desserts-drinks.component';

describe('DessertsDrinksComponent', () => {
  let component: DessertsDrinksComponent;
  let fixture: ComponentFixture<DessertsDrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DessertsDrinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DessertsDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
