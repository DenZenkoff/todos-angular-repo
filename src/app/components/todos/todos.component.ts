import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cell } from 'src/app/classes/cell/cell';
import { DateService } from 'src/app/services/date.service';
import { CalendarService } from 'src/app/services/helpers/calendar.service';
import { SlidePanelService } from 'src/app/services/helpers/slide-panel.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  private datesSubscription$: Subscription;

  public cells: Array<Cell>;
  public fromDate: Date;
  public toDate: Date;

  constructor(public dateService: DateService, public slidePanelService: SlidePanelService, private calendarServie: CalendarService) { }

  ngOnInit(): void {
    this.datesSubscription$ = this.dateService.datesObs.subscribe(data => {
      this.cells = this.calendarServie.getCalendar(data);
      this.fromDate = new Date(data[0].getTime());
      this.toDate = new Date(data[data.length - 1].getTime());
    });
  }

  ngOnDestroy(): void {
    this.datesSubscription$.unsubscribe();
  }

  @HostListener('document:keydown.escape', ['$event']) 
  onEscapeKeydownHanlder(event: KeyboardEvent) {
    this.slidePanelService.closeSlidePanel();
  }

  @HostListener('document:keydown.arrowleft', ['$event']) 
  onArrowleftKeydownHanlder(event: KeyboardEvent) {
    this.dateService.setPreviousMonth();
  }  
  
  @HostListener('document:keydown.arrowright', ['$event']) 
  onArrowRightKeydownHanlder(event: KeyboardEvent) {
    this.dateService.setNextMonth();   
  }
}
