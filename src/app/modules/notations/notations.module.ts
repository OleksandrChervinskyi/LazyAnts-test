import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NotationsRoutingModule} from './notations-routing.module';
import {
  CreateNewOneComponent,
  DialogComponent,
  NotationComponent,
  NotationsListComponent,
  UpdateOneComponent
} from './components';
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {DataService, GuardsService, NotationsService} from "./services";


@NgModule({
  declarations: [
    NotationsListComponent,
    CreateNewOneComponent,
    DialogComponent,
    UpdateOneComponent,
    NotationComponent
  ],
  imports: [
    CommonModule,
    NotationsRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    DataService,
    GuardsService,
    NotationsService
  ],
  entryComponents: [DialogComponent]
})
export class NotationsModule {
}
