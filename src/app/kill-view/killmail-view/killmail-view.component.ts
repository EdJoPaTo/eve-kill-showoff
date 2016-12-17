import { Component, OnInit, DoCheck, Input } from '@angular/core';

import { Killmail } from '../../z-killboard';

@Component({
  selector: 'app-killmail-view',
  templateUrl: './killmail-view.component.html',
  styleUrls: ['./killmail-view.component.scss']
})
export class KillmailViewComponent implements OnInit, DoCheck {
  @Input() killmails: Killmail[];
  @Input() listview: boolean = false;
  damageDealt: number = 0;
  iskDestroyed: number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.killmails) {
      this.damageDealt = this.killmails
        .map(k => k.victim.damageTaken)
        .reduce((a, b) => a + b, 0);

      this.iskDestroyed = this.killmails
        .map(k => k.zkb.totalValue)
        .reduce((a, b) => a + b, 0);
    }
  }

}
