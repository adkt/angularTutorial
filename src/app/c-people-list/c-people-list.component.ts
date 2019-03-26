import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

import { Person } from '../person'

// Services
import { $PersonSelectedService } from '../$person-selected.service';
import { $ClickedOutsideListService } from '../$clicked-outside-list.service';

@Component({
  selector: 'app-c-people-list',
  templateUrl: './c-people-list.component.html',
  styleUrls: ['./c-people-list.component.css']
})
export class CPeopleListComponent implements OnInit {

  /*** Directives ***/
  @Input() selectedPerson: Person;
  @Input() allPeople;

  @HostListener('click')
  clickInside() {
    //clicked List inside
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickOutside() {
    //clicked List outside
    if (!this.wasInside && !this.clickedOutsideListButInsideDetails) {
      this.$PersonSelected.vSetSelectedPerson(null);
    }
    this.wasInside = false;
  }

  /*** vars ***/
  private wasInside = false;
  private clickedOutsideListButInsideDetails;

  constructor ( private $PersonSelected:$PersonSelectedService, private $ClickedOutsideList:$ClickedOutsideListService ) { }

  ngOnInit() {
    this.subscribeSelectedPerson();
    this.subscribeClikedOutsideList();
  }

  onSelect (person:Person){
    this.$PersonSelected.vSetSelectedPerson(person);
  }

  subscribeSelectedPerson():void {
    this.$PersonSelected.vGetSelectedPerson()
      .subscribe( person => this.selectedPerson = person);
  }

  subscribeClikedOutsideList():void {
    this.$ClickedOutsideList.vGetClickedOutsideListSubject()
      .subscribe( clicked => this.clickedOutsideListButInsideDetails = clicked);
  }

  updateClickedOutsideList(clicked:Boolean):void{
    this.$ClickedOutsideList.vSetClickedOutsideList(clicked);
  }


}