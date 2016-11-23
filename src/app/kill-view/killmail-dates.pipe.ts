import { Pipe, PipeTransform } from '@angular/core';

import { Killmail } from '../z-killboard';
import { KillTimeToDatePipe } from '../shared';

const monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec' ];

@Pipe({
  name: 'killmailDates'
})
export class KillmailDatesPipe implements PipeTransform {

  transform(value: Killmail[], excludeCurrentMonth = false): any[] {
    if (!value) { return []; }

    let dates = value.map(o => KillTimeToDatePipe.toDate(o.killTime));
    let result = [];

    for (let i = 0; i < dates.length; i++) {
      let year = dates[i].getUTCFullYear();
      let month = dates[i].getUTCMonth() + 1;

      if (!result.some(o => o.month === month && o.year === year)) {
        result = result.concat({month: month, year: year, monthName: monthNames[month - 1]});
      }
    }

    if (excludeCurrentMonth) {
      let currentYear = new Date().getUTCFullYear();
      let currentMonth = new Date().getUTCMonth() + 1;
      result = result.filter(o => o.month !== currentMonth || o.year !== currentYear);
    }

    return result;
  }

}
