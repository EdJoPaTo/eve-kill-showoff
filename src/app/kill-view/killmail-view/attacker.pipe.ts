import { Pipe, PipeTransform } from '@angular/core';

import { Attacker, Killmail } from '../../z-killboard';

@Pipe({
  name: 'attacker'
})
export class AttackerPipe implements PipeTransform {

  transform(killmails: Killmail[], param?: string): Attacker[] {
    if (!killmails || !killmails.length) { return []; }

    return killmails
      .map(k => k.attackers)
      .reduce((a, b) => a.concat(b), []) // merge all into a single array
      .map(a => param ? a[param] : a);
  }

}
