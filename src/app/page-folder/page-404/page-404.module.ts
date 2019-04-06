import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Page404RoutingModule} from './page-404-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    Page404RoutingModule
  ]
})
export class Page404Module {
}
