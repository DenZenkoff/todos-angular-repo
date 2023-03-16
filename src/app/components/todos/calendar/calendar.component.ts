import { Component, Input } from '@angular/core';
import { Cell } from 'src/app/classes/cell/cell';
import { CellService } from 'src/app/services/helpers/cell.service';

@Component({
  selector: 'todos-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  @Input() cells: Array<Cell>;

  constructor(public cellService: CellService) { }
}