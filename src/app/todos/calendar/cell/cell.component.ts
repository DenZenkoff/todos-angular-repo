import { Component, Input } from '@angular/core';

@Component({
  selector: 'calendar-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent { 
  private _cellDate: Date;
  private _isWorkDay: Boolean;
  @Input() set cellDate(date: Date) { this._cellDate = new Date(date); this.setDayType(); }
  get cellDate(): Date { return this._cellDate }

  constructor() { }

  setDayType() {
    const day = this.cellDate.getDay();
    this._isWorkDay = day >= 1 && day <= 5; 
  }

  getCellStyle(): String {
    return this._isWorkDay ? 'workday' : 'holiday';
  }

  getCellAddIcon(): String {
    return this._isWorkDay ? 'assets/t_add_24.png' : 'assets/g_add_24.png'
  }
}
