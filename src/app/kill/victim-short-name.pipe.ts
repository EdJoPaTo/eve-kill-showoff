import { Pipe, PipeTransform } from '@angular/core';

import { Victim } from '../z-killboard';

@Pipe({
  name: 'victimShortName'
})
export class VictimShortNamePipe implements PipeTransform {

  transform(victim: Victim): any {
    let primary = victim.characterName ? victim.characterName : victim.corporationName;
    let secondary = victim.allianceName ? victim.allianceName : victim.corporationName;

    if (primary !== secondary) {
      return primary + ', ' + secondary;
    } else {
      return primary;
    }
  }

}
