import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Person } from './Person'

@Injectable()
export class VPersonSelectedService {

  private selectedPerson:Person = { name: "Not any one", id: 1};

  constructor() { }

  getSelectedPersonV(): Observable<Person> {
    return of(this.selectedPerson);
  }

}