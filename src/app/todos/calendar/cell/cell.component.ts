import { Component, Input } from '@angular/core';
import { CellData } from 'src/app/classes/cell-data';
import { RecordsHelperService } from 'src/app/services/records-helper.service';

@Component({
  selector: 'calendar-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  @Input() cellData: CellData;
  
  constructor(private recordsHelper: RecordsHelperService) { }

  cellClick() { this.recordsHelper.changeVisibility(); }

  addBtnClick() { alert('Call from Button') }
}
