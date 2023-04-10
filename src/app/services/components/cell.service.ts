import { Injectable } from '@angular/core';
import { Cell } from 'src/app/classes/cell/cell';
import { CellData } from 'src/app/classes/cell/cell-data';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Injectable({
  providedIn: 'root'
})
export class CellService {
  constructor(private todoDataService: TodoDataService) { }

  setCell(date: Date): Cell {
    const recordsCount = this.getRecordsCount(date);
    const cellData = new CellData(date, recordsCount);
    return new Cell(cellData, false);
  }

  getRecordsCount(date: Date): number {
    return this.todoDataService.getTodos(date).length;
  }
}
