import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

import { Person } from '../person'

// Services
import { VPersonSelectedService } from '../v-person-selected.service';

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

  constructor ( private personSelectedV:VPersonSelectedService ) { }

  ngOnInit() {
    this.subscribeSelectedPerson();
  }

  onSelect (person:Person){
    this.personSelectedV.setSelectedPersonV(person);
  }

  subscribeSelectedPerson():void {
    this.personSelectedV.getSelectedPersonV()
      .subscribe( person => this.selectedPerson = person);
  }


}