import { Component } from '@angular/core';

@Component({
  selector: 'todos-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  dates: Array<Date>;

  constructor() {
    this.dates = this.getDateArray();
  }

  getDateArray() : Array<Date> {
    const dates = new Array<Date>();
    const currentDate = new Date();
    let date = new Date();
    date.setDate(currentDate.getDate() - 6);

    let i = 0;
    while (i < 28) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
      i++;
    }

    return dates;
  }
}
