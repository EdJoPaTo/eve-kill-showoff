import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'killTimeToDate'
})
export class KillTimeToDatePipe implements PipeTransform {

  static toDate(killTime: string): Date {
    let splitted = killTime.split(/-| |:/);
    let date = Date.UTC(splitted[0], splitted[1] - 1, splitted[2], splitted[3], splitted[4], splitted[5]);
    return new Date(date);
  }

  transform(killTime: string): Date {
    return this.toDate(killTime);
  }

}
