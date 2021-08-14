import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotationsListComponent} from "./components/notations-list/notations-list.component";
import {UpdateOneComponent} from "./components/update-one/update-one.component";

const routes: Routes = [
  {
    path: '',   // notations
    component: NotationsListComponent,
  },
  {
    path: 'updateNotation',
    component: UpdateOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotationsRoutingModule {
}
