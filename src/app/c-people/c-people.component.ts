import { Component, OnInit } from '@angular/core';
import { Person } from '../person'
import dataPeople from '../mock-people.json';

@Component({
  selector: 'app-c-people',
  templateUrl: './c-people.component.html',
  styleUrls: ['./c-people.component.css']
})
export class CPeopleComponent implements OnInit {

  allPeople = (<any>dataPeople).Group;
  firstPersonName = (<any>dataPeople).Group[0].Name;
  
  person1:Person = {
    name: 'Windstorm',
    id: 1
  }

  selectedPerson:Person;

  constructor() { }

  ngOnInit() {
    
  }

  onSelect (_person:Person){
    this.selectedPerson = _person;
  }
}