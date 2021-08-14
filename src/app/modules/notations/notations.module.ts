import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NotationsRoutingModule} from './notations-routing.module';
import {NotationsListComponent} from './components/notations-list/notations-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CreateNewOneComponent} from './components/create-new-one/create-new-one.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {DialogComponent} from './components/dialog/dialog.component';
import { UpdateOneComponent } from './components/update-one/update-one.component';


@NgModule({
  declarations: [
    NotationsListComponent,
    CreateNewOneComponent,
    DialogComponent,
    UpdateOneComponent
  ],
  imports: [
    CommonModule,
    NotationsRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [DialogComponent]
})
export class NotationsModule {
}
