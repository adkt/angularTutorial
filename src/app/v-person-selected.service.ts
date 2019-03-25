import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Person } from './Person'

@Injectable()
export class VPersonSelectedService {

  private initialPerson:Person = { name: "Not really any one", id: 2};
  
  private subject:Subject<any> = new Subject<any>();

  constructor() { }

  getSelectedPersonV(): Subject<any> {
    return this.subject;
  }

  setSelectedPersonV( person:Person ):void {
    this.subject.next(person);
  }

  setInitialSelectedPersonV (){
    this.subject.next(this.initialPerson);
  }

}