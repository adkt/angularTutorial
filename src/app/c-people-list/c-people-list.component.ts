import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

import { Person } from '../person'

// Services
import { $PersonSelectedService } from '../$person-selected.service';

@Component({
  selector: 'app-c-people-list',
  templateUrl: './c-people-list.component.html',
  styleUrls: ['./c-people-list.component.css']
})
export class CPeopleListComponent implements OnInit {

  /*** Directives ***/
  @Input() selectedPerson: Person;
  @Input() allPeople;

  constructor ( private $PersonSelected:$PersonSelectedService ) { }

  ngOnInit() {
    this.subscribeSelectedPerson();
  }

  onSelect (person:Person){
    this.$PersonSelected.vSetSelectedPerson(person);
  }

  subscribeSelectedPerson():void {
    this.$PersonSelected.vGetSelectedPerson()
      .subscribe( person => this.selectedPerson = person);
  }


}