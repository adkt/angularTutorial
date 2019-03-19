import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-people',
  templateUrl: './c-people.component.html',
  styleUrls: ['./c-people.component.css']
})
export class CPeopleComponent implements OnInit {

  cPeopleName = 'Windstorm';

  constructor() { }

  ngOnInit() {
  }

}