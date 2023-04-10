import { Component, Input } from '@angular/core';
import { Cell } from 'src/app/classes/cell/cell';
import { CellService } from 'src/app/services/components/cell.service';
import { SlidePanelService } from 'src/app/services/components/slide-panel.service';

@Component({
  selector: 'calendar-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  @Input() cell: Cell;
  
  constructor(
    private cellService: CellService, 
    private slidePanelService: SlidePanelService) { }

  onChangeRecords(date: Date) { return this.cellService.getRecordsCount(date); }

  onCell_Click() { this.slidePanelService.openSlidePanel(this.cell.data.date); }
}
