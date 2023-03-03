import { Injectable } from '@angular/core';
import { CellData } from 'src/app/classes/cell-data';
import { CommonStyles } from 'src/app/enums/common-styles';


@Injectable({
  providedIn: 'root'
})
export class CellHelperService {
  constructor() { }

  getCellData(date: Date): CellData {
    const data = new CellData();

    if (date) {
      const day = date.getDay();
      
      data.style = day >= 1 && day <= 5 ? CommonStyles.workday : CommonStyles.holiday;
      data.date = new Date(date);
    } else {
      data.isHidden = true;
    }

    return data;
  }
}
