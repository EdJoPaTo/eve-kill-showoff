import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Killmail } from '../z-killboard';
import { TypeInformationService } from '../type-information.service';

@Component({
  selector: 'app-kill',
  templateUrl: './kill.component.html',
  styleUrls: ['./kill.component.scss']
})
export class KillComponent implements OnInit {
  @Input() killmail: Killmail;

  constructor(
    private typeInformationService: TypeInformationService
  ) { }

  ngOnInit() {
    console.log('killmail', this.killmail);
  }

  typeName(id: number): Observable<string> {
    return this.typeInformationService.name(id);
  }
}
