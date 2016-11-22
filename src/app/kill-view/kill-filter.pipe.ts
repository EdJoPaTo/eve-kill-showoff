import { Pipe, PipeTransform } from '@angular/core';

import { Killmail } from '../z-killboard';

@Pipe({
  name: 'killFilter'
})
export class KillFilterPipe implements PipeTransform {

  transform(value: Killmail[], year: number, month: number): Killmail[] {
    if (!value) { return []; }

    return value.filter(kill => {
      let date = new Date(kill.killTime + ' UTC');

      if (date.getUTCFullYear() !== year) { return false; }
      if (date.getUTCMonth() + 1 !== month) { return false; }
      return true;
    });
  }

}
