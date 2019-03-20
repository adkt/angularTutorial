import { Component, OnInit } from '@angular/core';
import { Person } from '../person'
import dataPeople from '../mock-people.json';

@Component({
  selector: 'app-c-people',
  templateUrl: './c-people.component.html',
  styleUrls: ['./c-people.component.css']
})
export class CPeopleComponent implements OnInit {

  testname = (<any>dataPeople).Group[0].Name;
  
  person1: Person = {
    id: 1,
    name: 'Windstorm'
  }

  constructor() { }

  ngOnInit() {
  }

}