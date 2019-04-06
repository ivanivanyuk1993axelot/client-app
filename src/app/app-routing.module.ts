import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    loadChildren: './page-folder/debug/debug.module#DebugModule',
    path: 'debug',
  },
  {
    loadChildren: './page-folder/page-404/page-404.module#Page404Module',
    path: '**',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
