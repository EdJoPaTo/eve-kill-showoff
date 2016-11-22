import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigService } from './config.service';

import { ModuloPipe } from './modulo.pipe';
import { ShortnumberPipe } from './shortnumber.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModuloPipe,
    ShortnumberPipe
  ],
  providers: [
    ConfigService
  ],
  exports: [
    ModuloPipe,
    ShortnumberPipe
  ]
})
export class SharedModule { }
