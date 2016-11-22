import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolarSystemService } from './solar-system.service';
import { TypeInformationService } from './type-information.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SolarSystemService,
    TypeInformationService
  ]
})
export class EsiModule { }
