import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from './todos.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CellComponent } from './calendar/cell/cell.component';
import { PagerComponent } from './pager/pager.component';
import { SlidePanelComponent } from './calendar/slide-panel/slide-panel.component';
import { TodosCounterPipe } from '../pipes/todos-counter.pipe';

@NgModule({
  declarations: [
    // COMPONENTS
    TodosComponent,
    CalendarComponent,
    CellComponent,
    PagerComponent,
    SlidePanelComponent,

    // PIPES
    TodosCounterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
