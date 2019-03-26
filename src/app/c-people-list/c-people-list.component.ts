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
    console.log('clicked List inside');
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickOutside() {
    if (!this.wasInside) {
      if(this.clickedOutsideList != "OutsideListInsideDetails")
      {
        console.log(this.clickedOutsideList);
        this.$PersonSelected.vSetSelectedPerson(null);
      }
      console.log('clicked List outside');
    }
    this.wasInside = false;
  }

  /*** vars ***/
  private wasInside = false;
  private clickedOutsideList;

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
      .subscribe( clicked => this.clickedOutsideList = clicked);
  }

  updateClickedOutsideList(clicked:Boolean):void{
    this.$ClickedOutsideList.vSetClickedOutsideList(clicked);
  }


}