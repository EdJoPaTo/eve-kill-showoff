import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  exports: [
    ModuloPipe,
    ShortnumberPipe
  ]
})
export class SharedModule { }
