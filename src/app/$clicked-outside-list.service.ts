import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class $ClickedOutsideListService {

  constructor() { }

  private subject:Subject<any> = new Subject<any>();

  vGetClickedOutsideListSubject(): Subject<any> {
    return this.subject;
  }

  vSetClickedOutsideListInsideDetails():void {
    this.subject.next(true);
  }
  
  vSetClickedOutsideDetails():void {
    this.subject.next(false);
  }
}