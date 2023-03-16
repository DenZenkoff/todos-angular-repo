import { Injectable } from '@angular/core';
import { Cell } from 'src/app/classes/cell/cell';
import { CellData } from 'src/app/classes/cell/cell-data';
import { Styles } from 'src/app/enums/styles';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Injectable({
  providedIn: 'root'
})
export class CellService {
  constructor(private todoDataService: TodoDataService) { }

  setCell(date: Date): Cell {
    const recordsCount = this.todoDataService.getTodos(date).length;
    const cellData = new CellData(date, recordsCount);
    const cellStyle = cellData.isWorkdate ? Styles.workday : Styles.holiday;
    return new Cell(cellData, cellStyle, false);
  }
}
