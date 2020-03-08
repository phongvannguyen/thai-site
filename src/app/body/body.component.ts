import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public isAppetizer = true;
  public isSalad = false;
  public isSoup = false;
  public isDesertsDrinks = false;
  public menus = ['Appetizer', 'Salad', 'Soup', 'Desserts & Drinks'];
  constructor() { }

  ngOnInit(): void {
  }

  public showMenu(menu: string): void {
    if (menu === 'Appetizer') {
      this.isAppetizer = true;
      this.isSalad = false;
      this.isSoup = false;
      this.isDesertsDrinks = false;
    } else if (menu === 'Salad') {
      this.isSalad = true;
      this.isAppetizer = false;
      this.isSoup = false;
      this.isDesertsDrinks = false;
    } else if (menu === 'Soup') {
      this.isSoup = true;
      this.isAppetizer = false;
      this.isSalad = false;
      this.isDesertsDrinks = false;
    } else if (menu === 'Desserts & Drinks') {
      this.isDesertsDrinks = true;
      this.isAppetizer = false;
      this.isSalad = false;
      this.isSoup = false;
    }
  }
}
