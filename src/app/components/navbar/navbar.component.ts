import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
  // properties
  brand: string;

  constructor() {}

  ngOnInit() {
    // properties
    this.brand = 'Angular Router';
  }
}