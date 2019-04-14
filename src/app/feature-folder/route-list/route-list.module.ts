import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouteListComponent} from './route-list/route-list.component';
import {RouteListRootComponent} from './route-list-root/route-list-root.component';
import {MatAutocompleteModule, MatExpansionModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {RouteComponent} from './route/route.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RouteListMenuComponent } from './route-list-menu/route-list-menu.component';
import { RouteMenuComponent } from './route-menu/route-menu.component';

@NgModule({
  declarations: [RouteListComponent, RouteListRootComponent, RouteComponent, RouteListMenuComponent, RouteMenuComponent],
  exports: [RouteListRootComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class RouteListModule {
}
