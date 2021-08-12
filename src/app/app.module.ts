import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path : 'notations',
        loadChildren : () => import('./modules/notations/notations.module').then(m => m.NotationsModule)
      },
      {
        path: '',
        redirectTo: 'notations',
        pathMatch : 'full'
      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
