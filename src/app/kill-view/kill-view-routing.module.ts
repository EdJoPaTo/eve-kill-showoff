import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KillViewComponent } from './kill-view.component';

const routes: Routes = [
  { path: 'current', component: KillViewComponent },
  { path: ':year/:month', component: KillViewComponent },
  { path: '**', redirectTo: 'current' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class KillViewRoutingModule { }
