import { Component, OnInit, DoCheck, Input } from '@angular/core';

import { Killmail } from '../../z-killboard';

@Component({
  selector: 'app-killmail-view',
  templateUrl: './killmail-view.component.html',
  styleUrls: ['./killmail-view.component.scss']
})
export class KillmailViewComponent implements OnInit, DoCheck {
  @Input() killmails: Killmail[];
  damageDealt: number = 0;
  pilotsInvolved: number = 0;
  iskDestroyed: number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.killmails) {
      this.damageDealt = this.killmails
        .map(k => k.victim.damageTaken)
        .reduce((a, b) => a + b, 0);

      this.pilotsInvolved = this.killmails
        .map(k => k.attackers)
        .reduce((a, b) => a.concat(b), []) // merge all into a single array
        .map(attacker => attacker.characterID)
        .filter((v, i, a) => a.indexOf(v) === i) // only unique
        .length;

      this.iskDestroyed = this.killmails
        .map(k => k.zkb.totalValue)
        .reduce((a, b) => a + b, 0);
    }
  }

}
