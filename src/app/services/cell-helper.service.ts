import { Injectable } from '@angular/core';
import { CellData } from '../classes/cell-data';
import { CellStyles } from '../enums/cell-styles';
import { Images } from '../enums/images';

@Injectable({
  providedIn: 'root'
})
export class CellHelperService {
  constructor() { }

  getCellData(date: Date): CellData {
    const data = new CellData();

    if (date) {
      const day = date.getDay(),
            isWorkDay = day >= 1 && day <= 5; 
      
      data.Style = this.getCellStyle(isWorkDay);
      data.AddImage = this.getCellAddIcon(isWorkDay);
      data.Date = new Date(date);
    } else {
      data.IsHidden = true;
    }

    return data;
  }

  private getCellAddIcon(isWorkDay: Boolean): String {
    return isWorkDay ? Images.add_icn_t_24 : Images.add_icn_g_24;
  }

  private getCellStyle(isWorkDay: Boolean): String {
    return isWorkDay ? CellStyles.Workday : CellStyles.Holiday;
  }
}
