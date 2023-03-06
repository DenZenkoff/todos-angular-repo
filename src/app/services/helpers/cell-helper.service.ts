import { Injectable } from '@angular/core';
import { CellData } from 'src/app/classes/cell-data';

@Injectable({
  providedIn: 'root'
})
export class CellHelperService {
  private _styles: any = {
    workday: ' workday ',
    holiday: ' holiday '
  }

  getCellData(date: Date): CellData {
    const data = new CellData();

    if (date) {
      const day = date.getDay();
      
      data.date = new Date(date);
      data.isWorkdate = day >= 1 && day <= 5;
    }

    return data;
  }

  getCellStyle(data: CellData): string {
    return data.isWorkdate ? this._styles.workday : this._styles.holiday;
  }

  isCellHidden(data: CellData): boolean {
    return data.date ? false : true;
  }
}
