import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ZKillboardModule } from './z-killboard';

import { LoadKillsService } from './load-kills.service';

import { AppComponent } from './app.component';
import { KillComponent } from './kill/kill.component';
import { KillListComponent } from './kill-list/kill-list.component';
import { ModuloPipe } from './modulo.pipe';
import { ShortnumberPipe } from './shortnumber.pipe';
import { VictimShortNamePipe } from './kill/victim-short-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KillComponent,
    KillListComponent,
    ModuloPipe,
    ShortnumberPipe,
    VictimShortNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ZKillboardModule
  ],
  providers: [
    LoadKillsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
