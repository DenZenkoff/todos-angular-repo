import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from 'src/app/app.component';
import { TodosModule } from 'src/app/modules/todos.module';
import { TimesheetsModule } from 'src/app/modules/timesheets.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TodosModule,
    TimesheetsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
