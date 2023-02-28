import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  testDates: Array<Date>;

  constructor() {
    this.testDates = this.getDateArray();
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
