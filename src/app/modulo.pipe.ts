import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modulo'
})
export class ModuloPipe implements PipeTransform {

  transform(array: any, total: number, current: number): any {
    if (!array || !array.length) { return []; }

    return array.filter((elem, i) => i % total === current);
  }

}
