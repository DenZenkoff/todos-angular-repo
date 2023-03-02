import { Component, Input } from '@angular/core';
import { CellData } from 'src/app/classes/cell-data';

@Component({
  selector: 'calendar-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  @Input() cellData: CellData;
  
  constructor() { }

  cellClick() { alert('Call from Cell') }

  addBtnClick() { alert('Call from Button') }
}
