import { Injectable } from '@angular/core';
import { CellData } from 'src/app/classes/cell-data';
import { Styles } from 'src/app/enums/styles';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Injectable({
  providedIn: 'root'
})
export class CellHelperService {
  constructor(private tdService: TodoDataService) { }

  getCellData(date: Date): CellData {
    const data = new CellData();

    if (date) {
      const day = date.getDay();
      const recordsCount = this.tdService.getTodos(date).length;
      
      data.date = new Date(date);
      data.isWorkdate = day >= 1 && day <= 5;
      data.recordsCount = recordsCount;
    }

    return data;
  }

  getCellStyle(data: CellData): string {
    return data.isWorkdate ? Styles.workday : Styles.holiday;
  }
}
