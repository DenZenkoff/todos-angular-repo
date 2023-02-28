import { Component, Input } from '@angular/core';

@Component({
  selector: 'todos-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  @Input() dates: Array<Date>;
}
