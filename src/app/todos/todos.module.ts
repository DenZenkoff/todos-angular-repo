import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosComponent } from './todos.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CellComponent } from './calendar/cell/cell.component';
import { PagerComponent } from './pager/pager.component';
import { SlidePanelComponent } from './calendar/slide-panel/slide-panel.component';
import { TodosCounterPipe } from '../pipes/todos-counter.pipe';
import { RecordComponent } from './calendar/slide-panel/record/record.component';
import { ClickedOutsideDirective } from '../directives/clicked-outside.directive';

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
