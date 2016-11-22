import { Component, OnInit, Input } from '@angular/core';

import { Killmail } from '../../z-killboard';

@Component({
  selector: 'app-tiles-view',
  templateUrl: './tiles-view.component.html',
  styleUrls: ['./tiles-view.component.scss']
})
export class TilesViewComponent implements OnInit {
  @Input() killmails: Killmail[];

  constructor() { }

  ngOnInit() {
  }

}
