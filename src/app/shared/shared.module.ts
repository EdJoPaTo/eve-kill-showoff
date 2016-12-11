import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigService } from './config.service';

import { DistinctPipe } from './distinct.pipe';
import { KillTimeToDatePipe } from './kill-time-to-date.pipe';
import { ShortnumberPipe } from './shortnumber.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DistinctPipe,
    KillTimeToDatePipe,
    ShortnumberPipe
  ],
  providers: [
    ConfigService
  ],
  exports: [
    DistinctPipe,
    KillTimeToDatePipe,
    ShortnumberPipe
  ]
})
export class SharedModule { }
