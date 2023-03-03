import { Component, Input } from '@angular/core';
import { CellData } from 'src/app/classes/cell-data';
import { SlidePanelHelperService } from 'src/app/services/helpers/slide-panel-helper.service';

@Component({
  selector: 'calendar-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  @Input() cellData: CellData;
  
  constructor(private sphService: SlidePanelHelperService) { }

  cellClick() { this.sphService.changeDisplayStyle(); }

  addBtnClick() { alert('Call from Button') }
}
