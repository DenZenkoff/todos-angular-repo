import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestDataHelperService {

  constructor() { }

  getTestDateArray() : any {
    const dates = new Array<Date>();
    const currentDate = new Date(),
          firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
          lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const dayOfWeek = firstDay.getDay();
    
    if (dayOfWeek >= 2 && dayOfWeek <= 6) {
      for(let i = 1; i < dayOfWeek; i++)
        dates.length++;
    }

    while (firstDay <= lastDay) {
      dates.push(new Date(firstDay));
      firstDay.setDate(firstDay.getDate() + 1);
    }

    if (dates.length < 35) {
      for(let i = dates.length; i < 35; i++)
        dates.length++;
    }
    
    return {
      firstDay: firstDay,
      lastDay: lastDay,
      dates: dates
    }
  }
}
