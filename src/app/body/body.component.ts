import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public isSalad = false;
  constructor() { }

  ngOnInit(): void {
  }

  public showSalad(): void {
    this.isSalad = true;
  }
}
