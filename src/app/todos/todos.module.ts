import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosComponent } from 'src/app/todos/todos.component';
import { CalendarComponent } from 'src/app/todos/calendar/calendar.component';
import { CellComponent } from 'src/app/todos/calendar/cell/cell.component';
import { PagerComponent } from 'src/app/todos/pager/pager.component';
import { SlidePanelComponent } from 'src/app/todos/calendar/slide-panel/slide-panel.component';
import { RecordComponent } from 'src/app/todos/calendar/slide-panel/record/record.component';

import { TodosCounterPipe } from 'src/app/pipes/todos-counter.pipe';

import { ClickedOutsideDirective } from 'src/app/directives/clicked-outside.directive';

@NgModule({
  declarations: [
    // COMPONENTS
    TodosComponent,
    CalendarComponent,
    CellComponent,
    PagerComponent,
    SlidePanelComponent,
    RecordComponent,

    // PIPES
    TodosCounterPipe,

    // DIRECTIVES
    ClickedOutsideDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
