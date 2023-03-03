import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from './todos.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CellComponent } from './calendar/cell/cell.component';
import { PagerComponent } from './pager/pager.component';
import { SlidePanelComponent } from './slide-panel/slide-panel.component';


@NgModule({
  declarations: [
    TodosComponent,
    CalendarComponent,
    CellComponent,
    PagerComponent,
    SlidePanelComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
