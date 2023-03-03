import { Injectable } from '@angular/core';
import { CellData } from '../classes/cell-data';
import { CellStyles } from '../enums/cell-styles';

@Injectable({
  providedIn: 'root'
})
export class CellHelperService {
  constructor() { }

  getCellData(date: Date): CellData {
    const data = new CellData();

    if (date) {
      const day = date.getDay();
      
      data.style = day >= 1 && day <= 5 ? CellStyles.workday : CellStyles.holiday;
      data.date = new Date(date);
    } else {
      data.isHidden = true;
    }

    return data;
  }
}
