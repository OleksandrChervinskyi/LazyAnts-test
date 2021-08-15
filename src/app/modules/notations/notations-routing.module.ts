import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotationsListComponent, UpdateOneComponent} from "./components";
import {GuardsService} from "./services";

const routes: Routes = [
  {
    path: '',   // /notations
    component: NotationsListComponent,
  },
  {
    path: 'updateNotation',
    component: UpdateOneComponent,
    canActivate: [GuardsService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotationsRoutingModule {
}
