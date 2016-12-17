import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Killmail } from '../../z-killboard';
import { SolarSystemService, TypeInformationService } from '../../esi';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input() killmails: Killmail[];

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
