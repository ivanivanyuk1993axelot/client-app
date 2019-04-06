import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouteListComponent} from './route-list/route-list.component';
import {RouteListRootComponent} from './route-list-root/route-list-root.component';
import {MatIconModule, MatListModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { RouteComponent } from './route/route.component';

@NgModule({
  declarations: [RouteListComponent, RouteListRootComponent, RouteComponent],
  exports: [RouteListRootComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    RouterModule,
  ]
})
export class RouteListModule {
}
