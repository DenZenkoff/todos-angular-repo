import { Component, Input } from '@angular/core';
import { CellHelperService } from 'src/app/services/helpers/cell-helper.service';

@Component({
  selector: 'todos-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  @Input() dates: Array<Date>;

  constructor(public chService: CellHelperService) { }
}
