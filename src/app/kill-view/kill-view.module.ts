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

import { AttackerPipe } from './killmail-view/attacker.pipe';
import { KillFilterPipe } from './kill-filter.pipe';
import { KillmailDatesPipe } from './killmail-dates.pipe';
import { KillmailViewComponent } from './killmail-view/killmail-view.component';
import { KillTileComponent } from './kill-tile/kill-tile.component';
import { LasthitPipe } from './lasthit.pipe';
import { ListViewComponent } from './list-view/list-view.component';
import { TilesViewComponent } from './tiles-view/tiles-view.component';
import { TopdamagePipe } from './topdamage.pipe';
import { TopPilotsPipe } from './killmail-view/top-pilots.pipe';

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
    AttackerPipe,
    KillFilterPipe,
    KillmailDatesPipe,
    KillmailViewComponent,
    KillTileComponent,
    KillViewComponent,
    LasthitPipe,
    ListViewComponent,
    TilesViewComponent,
    TopdamagePipe,
    TopPilotsPipe
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
