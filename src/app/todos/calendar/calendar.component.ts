import { Component, Input } from '@angular/core';
import { CellHelperService } from 'src/app/services/helpers/cell-helper.service';
import { SlidePanelHelperService } from 'src/app/services/helpers/slide-panel-helper.service';

@Component({
  selector: 'todos-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  @Input() dates: Array<Date>;

  constructor(
    private sphService: SlidePanelHelperService,
    public chService: CellHelperService) { }

  onCellClick_Handler(date: Date) {
    this.sphService.openSlidePanel(date);
  }
}
