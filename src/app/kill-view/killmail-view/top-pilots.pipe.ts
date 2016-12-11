import { Pipe, PipeTransform } from '@angular/core';

import { Attacker } from '../../z-killboard';

function countArrayOccurrences(arr) {
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    let id = arr[i];
    counts[id] = counts[id] ? counts[id] + 1 : 1;
  }
  let keys = Object.keys(counts).map(i => Number(i));
  let countArr = keys.map(id => ({ id: id, count: counts[id] }));

  countArr.sort((a, b) => b.count - a.count);
  return countArr;
}

@Pipe({
  name: 'topPilots'
})
export class TopPilotsPipe implements PipeTransform {

  transform(attackers: Attacker[]): any[] {
    if (!attackers || !attackers.length) { return []; }

    let ids = attackers.map(a => a.characterID).filter(i => i !== 0);

    let pilotCounts = countArrayOccurrences(ids)
      .filter(o => o.count > 1)
      .slice(0, 6);
    let onlyRelevant = pilotCounts
      .filter(v => v.count !== pilotCounts[pilotCounts.length - 1].count);

    let withInfos = onlyRelevant.map(pilot => {
      let attacker = attackers.find(a => a.characterID === pilot.id);
      return { id: pilot.id, count: pilot.count, name: attacker.characterName };
    });

    return withInfos;
  }

}
