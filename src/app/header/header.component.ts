import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  products: any = [];
  announcement: string;
  phoneNumber: string;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('assets/announcement.txt').subscribe(data => {
      this.products = data;
      this.announcement = this.products.announcement;
      this.phoneNumber = this.products.phoneNumber;
    });

  }

}
