import { Pipe, PipeTransform } from '@angular/core';

import { Attacker } from '../z-killboard';

@Pipe({
  name: 'topdamage'
})
export class TopdamagePipe implements PipeTransform {

  transform(value: Attacker[]): Attacker {
    return value.filter(val => val.characterName)[0];
  }

}
