import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import {RouterModule} from '@angular/router';
import {FlexSpacerModule} from '../flex-spacer/flex-spacer.module';
import {RouteListModule} from '../route-list/route-list.module';

@NgModule({
  declarations: [PageLayoutComponent],
  exports: [
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    FlexSpacerModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouteListModule,
    RouterModule
  ]
})
export class PageLayoutModule { }
