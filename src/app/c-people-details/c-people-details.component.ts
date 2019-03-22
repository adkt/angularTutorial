// added Input so we can use @Input Property. An @Input property is a property that bound to another component
import { Component, OnInit, Input } from '@angular/core';

// added Person class for this component
import { Person } from '../person'

@Component({
  selector: 'app-c-people-details',
  templateUrl: './c-people-details.component.html',
  styleUrls: ['./c-people-details.component.css']
})
export class CPeopleDetailsComponent implements OnInit {

  // Here we bind the person property, declare Input Properties in the source component where it adds this components element [person]="linkedVariableNameFromSourceComponent"
  @Input() selectedPerson: Person;

  constructor() { }

  ngOnInit() {
  }

}