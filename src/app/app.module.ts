import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EsiModule } from './esi';
import { SharedModule } from './shared';
import { ZKillboardModule } from './z-killboard';

import { ConfigService } from './config.service';
import { LoadKillsService } from './load-kills.service';

import { AppComponent } from './app.component';
import { KillComponent } from './kill/kill.component';
import { KillListComponent } from './kill-list/kill-list.component';
import { LasthitPipe } from './lasthit.pipe';
import { TopdamagePipe } from './topdamage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KillComponent,
    KillListComponent,
    LasthitPipe,
    TopdamagePipe
  ],
  imports: [
    BrowserModule,
    EsiModule,
    FormsModule,
    HttpModule,
    SharedModule,
    ZKillboardModule
  ],
  providers: [
    ConfigService,
    LoadKillsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
