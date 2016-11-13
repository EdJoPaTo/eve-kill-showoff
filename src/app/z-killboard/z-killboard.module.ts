import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KillmailService } from './killmail.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    KillmailService
  ]
})
export class ZKillboardModule { }
