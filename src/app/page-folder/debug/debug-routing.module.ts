import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DebugComponent} from './debug/debug.component';

const routes: Routes = [
  {
    component: DebugComponent,
    path: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebugRoutingModule {
}
