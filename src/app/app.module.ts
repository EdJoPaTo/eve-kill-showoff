import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { KillViewModule } from './kill-view';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    KillViewModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
