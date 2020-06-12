import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseSpecialtiesComponent } from './house-specialties.component';

describe('HouseSpecialtiesComponent', () => {
  let component: HouseSpecialtiesComponent;
  let fixture: ComponentFixture<HouseSpecialtiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseSpecialtiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseSpecialtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
