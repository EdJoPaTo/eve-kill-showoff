import { Pipe, PipeTransform } from '@angular/core';

import { Killmail } from '../z-killboard';
import { KillTimeToDatePipe } from '../shared';

@Pipe({
  name: 'killFilter'
})
export class KillFilterPipe implements PipeTransform {

  transform(value: Killmail[], year: number, month: number, filter: any = {}): Killmail[] {
    if (!value) { return []; }

    return value.filter(kill => {
      let date = KillTimeToDatePipe.toDate(kill.killTime);

      if (date.getUTCFullYear() !== year) { return false; }
      if (date.getUTCMonth() + 1 !== month) { return false; }

      // filter by ESI search API
      if (Object.keys(filter).length === 0) {
        return true;
      }

      if (filter.character) {
        if (kill.attackers.some(attacker => filter.character.indexOf(attacker.characterID) >= 0)) { return true; }
        if (filter.character.indexOf(kill.victim.characterID) >= 0) { return true; }
      }

      if (filter.alliance) {
        if (kill.attackers.some(attacker => filter.alliance.indexOf(attacker.allianceID) >= 0)) { return true; }
        if (filter.alliance.indexOf(kill.victim.allianceID) >= 0) { return true; }
      }

      if (filter.corporation) {
        if (kill.attackers.some(attacker => filter.corporation.indexOf(attacker.corporationID) >= 0)) { return true; }
        if (filter.corporation.indexOf(kill.victim.corporationID) >= 0) { return true; }
      }

      if (filter.solarsystem) {
        if (filter.solarsystem.indexOf(kill.solarSystemID) >= 0) { return true; }
      }

      if (filter.inventorytype) {
        if (filter.inventorytype.indexOf(kill.victim.shipTypeID) >= 0) { return true; }
      }

      return false;
    });
  }

}
