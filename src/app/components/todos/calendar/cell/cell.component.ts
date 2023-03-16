import { Component, Input } from '@angular/core';
import { Cell } from 'src/app/classes/cell/cell';
import { SlidePanelService } from 'src/app/services/helpers/slide-panel.service';

@Component({
  selector: 'calendar-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  @Input() cell: Cell;
  
  constructor(private slidePanelService: SlidePanelService) { }

  onCell_Click() { this.slidePanelService.openSlidePanel(this.cell.data.date); }
}
