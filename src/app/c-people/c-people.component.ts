import { Component, OnInit } from '@angular/core';
import { Person } from '../person'
@Component({
  selector: 'app-c-people',
  templateUrl: './c-people.component.html',
  styleUrls: ['./c-people.component.css']
})
export class CPeopleComponent implements OnInit {

  person1: Person = {
    id: 1,
    name: 'Windstorm'
  }

  constructor() { }

  ngOnInit() {
  }

}