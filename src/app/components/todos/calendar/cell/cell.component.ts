import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CellData } from 'src/app/classes/cell-data';
import { CellHelperService } from 'src/app/services/helpers/cell-helper.service';

@Component({
  selector: 'calendar-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  @Input() data: CellData;
  
  @Output() onCellClick_Event = new EventEmitter<Date>();
  
  constructor(public chServise: CellHelperService) { }
}
