import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KillViewComponent } from './kill-view.component';

const routes: Routes = [
  { path: '', component: KillViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class KillViewRoutingModule { }
