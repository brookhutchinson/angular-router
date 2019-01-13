import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: [ './jumbotron.component.css' ]
})
export class JumbotronComponent implements OnInit {
  // properties
  jbtHeading: string;
  jbtTitle: string;
  jbtBtnText: string;
  jbtBtnUrl: string;

  constructor() {}

  ngOnInit() {
    // set properties
    this.jbtHeading = 'Angular Website';
    this.jbtTitle = 'Navigate between different component views using a Navbar Component and the Angular Router';
    this.jbtBtnText = 'Read More...';
    this.jbtBtnUrl = '#';
  }
}