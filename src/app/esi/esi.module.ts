import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchService } from './search.service';
import { SolarSystemService } from './solar-system.service';
import { TypeInformationService } from './type-information.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SearchService,
    SolarSystemService,
    TypeInformationService
  ]
})
export class EsiModule { }
