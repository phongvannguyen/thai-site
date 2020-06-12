import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  /* Common Menus of Lunch & Dinner*/
  public menuClicked = 'Dinner Entrees 1';
  public commonMenus = ['Appetizer', 'Salad', 'Soup', 'Desserts', 'Beverages'];
  public lunchMenus = ['Lunch Entrees', 'Lunch Curries', 'Lunch Fried Rice & Noodles'];
  public dinnerMenus = ['House Specialties', 'Dinner Entrees 1', 'Dinner Entrees 2', 'Curries', 'Noodles & Fried Rice'];

  constructor() { }

  ngOnInit(): void {
  }

  /* Common Menus of Lunch & Dinner*/
  public setMenu(menu: string): void {
    this.menuClicked = menu;
  }

  public showMenu(menu: string): boolean {
    return this.menuClicked === menu;
  }

  public isMenuClickedOn(menus: string[]): boolean {
    const foundMenu = menus.findIndex((menu) => menu === this.menuClicked);
    if (foundMenu > -1) {
      return true;
    } else {
      return false;
    }
  }
}
