import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotationsListComponent} from "./components/notations-list/notations-list.component";
import {ActionOnNotationComponent} from "./components/action-on-notation/action-on-notation.component";

const routes: Routes = [
  {
    path: '',   // notations
    component: NotationsListComponent,
  },
  {
    path: 'updateNotation',
    component: ActionOnNotationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotationsRoutingModule {
}
