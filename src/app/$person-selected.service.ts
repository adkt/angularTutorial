import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Person } from './Person'

@Injectable()
export class $PersonSelectedService {

  private initialPerson:Person = { name: "Not really any two", id: 2};
  
  private subject:Subject<any> = new Subject<any>();

  constructor() { }

  vGetSelectedPerson(): Subject<any> {
    return this.subject;
  }

  vSetSelectedPerson( person:Person ):void {
    this.subject.next(person);
  }

  vSetInitialSelectedPerson (){
    this.subject.next(this.initialPerson);
  }

}