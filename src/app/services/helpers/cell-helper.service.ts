import { Injectable } from '@angular/core';
import { CellData } from 'src/app/classes/cell-data';
import { Styles } from 'src/app/enums/styles';

@Injectable({
  providedIn: 'root'
})
export class CellHelperService {
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
    return data.isWorkdate ? Styles.workday : Styles.holiday;
  }
}
