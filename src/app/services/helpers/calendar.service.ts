import { Injectable } from '@angular/core';
import { Cell } from 'src/app/classes/cell/cell';
import { CellService } from './cell.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  constructor(private cellService: CellService) { }

  getCalendar(dates: Array<Date>): Array<Cell> {
    const cells = new Array<Cell>();
    const firstDayNumber = dates[0].getDay();

    this.addEmptyCells(cells, firstDayNumber);
    dates.forEach((date) => {
      cells.push(this.cellService.setCell(date));
    });
    this.addEmptyCells(cells);
    return cells;
  }

  private addEmptyCells(cells: Array<Cell>, firstDayNumber?: number) {
    if (firstDayNumber != undefined) {
      const day = firstDayNumber == 0 ? 7 : firstDayNumber;
      for(let i = day - 1; i > 0; i--) 
        cells.push(new Cell()); 
    }
    else {
      const numberOfCells = 41;
      for(let i = cells.length - 1; i < numberOfCells; i++)
        cells.push(new Cell()); 
    }
  }
}
