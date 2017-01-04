import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KillViewComponent } from './kill-view.component';

const routes: Routes = [
  { path: 'tiles', component: KillViewComponent, data: { view: 'tiles' } },
  { path: 'tiles/:year/:month', component: KillViewComponent, data: { view: 'tiles' } },
  { path: 'list', component: KillViewComponent, data: { view: 'list' } },
  { path: 'list/:year/:month', component: KillViewComponent, data: { view: 'list' } },
  { path: '**', redirectTo: 'tiles' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class KillViewRoutingModule { }
