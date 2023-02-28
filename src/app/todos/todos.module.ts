import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from './todos.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CellComponent } from './calendar/cell/cell.component';
import { RecordsComponent } from './calendar/records/records.component';


@NgModule({
  declarations: [
    TodosComponent,
    CalendarComponent,
    CellComponent,
    RecordsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
