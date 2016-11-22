import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Killmail } from '../../z-killboard';
import { SolarSystemService, TypeInformationService } from '../../esi';

@Component({
  selector: 'app-kill-tile',
  templateUrl: './kill-tile.component.html',
  styleUrls: ['./kill-tile.component.scss']
})
export class KillTileComponent implements OnInit {
  @Input() killmail: Killmail;

  constructor(
    private solarSystemService: SolarSystemService,
    private typeInformationService: TypeInformationService
  ) { }

  ngOnInit() {
  }

  typeName(id: number): Observable<string> {
    return this.typeInformationService.name(id);
  }
}
