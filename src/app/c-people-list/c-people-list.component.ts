import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

import { Person } from '../person'

@Component({
  selector: 'app-c-people-list',
  templateUrl: './c-people-list.component.html',
  styleUrls: ['./c-people-list.component.css']
})
export class CPeopleListComponent implements OnInit {

  /*** Directives ***/
  @Input() selectedPerson: Person;
  @Input() allPeople;

  @Output() selectedPersonFromList = new EventEmitter<Event>();

  constructor() { }

  ngOnInit() {
  }

  onSelect (_person:Person){
    this.selectedPerson = _person;
  }

  onClick(personClickedEvent: Event): void {
    this.selectedPersonFromList.emit(personClickedEvent);
  }

}