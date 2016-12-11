import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distinct'
})
export class DistinctPipe implements PipeTransform {

  transform(value: any[]): any[] {
    if (!value) { return []; }

    return value.filter((v, i, a) => a.indexOf(v) === i);
  }

}
