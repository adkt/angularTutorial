import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CPeopleComponent } from './c-people/c-people.component';
import { CPeopleDetailsComponent } from './c-people-details/c-people-details.component';
import { CPeopleListComponent } from './c-people-list/c-people-list.component';
import { SPersonSelectedService } from './s-person-selected.service';
import { VPersonSelectedService } from './v-person-selected.service';

@NgModule({
  declarations: [
    AppComponent,
    CPeopleComponent,
    CPeopleDetailsComponent,
    CPeopleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SPersonSelectedService, VPersonSelectedService],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/