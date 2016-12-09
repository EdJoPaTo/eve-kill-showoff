import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigService } from './config.service';

import { KillTimeToDatePipe } from './kill-time-to-date.pipe';
import { ShortnumberPipe } from './shortnumber.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    KillTimeToDatePipe,
    ShortnumberPipe
  ],
  providers: [
    ConfigService
  ],
  exports: [
    KillTimeToDatePipe,
    ShortnumberPipe
  ]
})
export class SharedModule { }
