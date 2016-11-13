import { Pipe, PipeTransform } from '@angular/core';

import { Attacker } from './z-killboard';

@Pipe({
  name: 'lasthit'
})
export class LasthitPipe implements PipeTransform {

  transform(value: Attacker[]): Attacker {
    return value.find(val => val.finalBlow > 0);
  }

}
