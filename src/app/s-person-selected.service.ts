import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Person } from './Person'

@Injectable({
   providedIn: 'root'
})

export class SPersonSelectedService {

  private selectedPersonFromService:Person = { name: "No one", id: 0};

  constructor() { 

  }

  getSelectedPersonFromService(): Observable<Person> {
    return of(this.selectedPersonFromService);
  }


}