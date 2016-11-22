import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


import { KillViewComponent } from './kill-view.component';

import { EsiModule } from '../esi';
import { KillViewRoutingModule } from './kill-view-routing.module';
import { SharedModule } from '../shared';
import { ZKillboardModule } from '../z-killboard';

import { LoadKillsService } from './load-kills.service';

import { KillFilterPipe } from './kill-filter.pipe';
import { KillTileComponent } from './kill-tile/kill-tile.component';
import { LasthitPipe } from './lasthit.pipe';
import { TilesViewComponent } from './tiles-view/tiles-view.component';
import { TopdamagePipe } from './topdamage.pipe';

@NgModule({
  imports: [
    CommonModule,
    EsiModule,
    FormsModule,
    HttpModule,
    KillViewRoutingModule,
    SharedModule,
    ZKillboardModule
  ],
  declarations: [
    KillFilterPipe,
    KillTileComponent,
    KillViewComponent,
    LasthitPipe,
    TilesViewComponent,
    TopdamagePipe
  ],
  providers: [
    LoadKillsService
  ],
  exports: [
    LasthitPipe,
    TopdamagePipe
  ]
})
export class KillViewModule { }
