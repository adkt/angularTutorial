import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class $ClickedOutsideListService {

  constructor() { }

  private subject:Subject<any> = new Subject<any>();
  private clickedOutside:Boolean = false;

  vGetClickedOutsideListSubject(): Subject<any> {
    return this.subject;
  }

  vSetClickedOutsideListInsideDetails():void {
    this.subject.next("OutsideListInsideDetails");
  }
  
  vSetClickedOutsideDetails():void {
    this.subject.next("OutsideDetails");
  }
}