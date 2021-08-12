import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotationsRoutingModule } from './notations-routing.module';
import { NotationsListComponent } from './components/notations-list/notations-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ActionOnNotationComponent } from './components/action-on-notation/action-on-notation.component';


@NgModule({
  declarations: [
    NotationsListComponent,
    ActionOnNotationComponent
  ],
    imports: [
        CommonModule,
        NotationsRoutingModule,
        ReactiveFormsModule
    ]
})
export class NotationsModule { }
