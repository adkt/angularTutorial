// added Input so we can use @Input Property. An @Input property is a property that bound to another component
import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

// added Person class for this component
import { Person } from '../person'

// Services
import { $PersonSelectedService } from '../$person-selected.service';
import { $ClickedOutsideListService } from '../$clicked-outside-list.service';

@Component({
  selector: 'app-c-people-details',
  templateUrl: './c-people-details.component.html',
  styleUrls: ['./c-people-details.component.css']
})

export class CPeopleDetailsComponent implements OnInit {

  /*** Directives ***/
  // Here we bind the person property, declare Input Properties in the source component where it adds this components element [person]="linkedVariableNameFromSourceComponent"
  @Input() selectedPerson: Person;
  @Input() allPeople;

  // HostListener listens for events then certain functions (e.g. clickout) run when the event is triggered
  @HostListener('click')
  clickInside() {
    console.log('clicked details inside');
    this.wasInside = true;
    this.notifyClickedInside();
  }
  
  @HostListener('document:click')
  clickOutside() {
    if (!this.wasInside) {
      console.log('clicked details outside');
      this.notifyClickedOutside();
    }
    this.wasInside = false;

  }

  /*** vars ***/
  private wasInside = false;

  constructor( private eRef: ElementRef, private $PersonSelected:$PersonSelectedService, private $ClickedOutsideList:$ClickedOutsideListService ) { }

  ngOnInit() {
    this.subscribeSelectedPerson();
    this.setInitialPerson();
  }

  setInitialPerson():void {
    this.$PersonSelected.vSetInitialSelectedPerson();
  }

  subscribeSelectedPerson():void {
    this.$PersonSelected.vGetSelectedPerson()
      .subscribe( person => this.selectedPerson = person);
  }

  notifyClickedInside():void{
    this.$ClickedOutsideList.vSetClickedOutsideListInsideDetails();
  }

  notifyClickedOutside():void{
    this.$ClickedOutsideList.vSetClickedOutsideDetails();
  }

}