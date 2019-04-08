import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouteListComponent} from './route-list/route-list.component';
import {RouteListRootComponent} from './route-list-root/route-list-root.component';
import {MatAutocompleteModule, MatExpansionModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {RouteComponent} from './route/route.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [RouteListComponent, RouteListRootComponent, RouteComponent],
  exports: [RouteListRootComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class RouteListModule {
}
