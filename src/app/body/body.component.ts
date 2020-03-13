import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  /* Common Menus of Lunch & Dinner*/
  public menuClicked = 'Lunch Fried Rice & Noodles';
  public commonMenus = ['Appetizer', 'Salad', 'Soup', 'Desserts & Drinks'];
  public lunchMenus = ['Lunch Entrees', 'Lunch Curries', 'Lunch Fried Rice & Noodles'];
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
}
