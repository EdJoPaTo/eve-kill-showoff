import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'killTimeToDate'
})
export class KillTimeToDatePipe implements PipeTransform {

  static toDate(killTime: string): Date {
    let splitted = killTime.split(/-| |:/);
    let date = Date.UTC(
      Number(splitted[0]),
      Number(splitted[1]) - 1,
      Number(splitted[2]),
      Number(splitted[3]),
      Number(splitted[4]),
      Number(splitted[5])
    );
    return new Date(date);
  }

  transform(killTime: string): Date {
    return this.toDate(killTime);
  }

}
