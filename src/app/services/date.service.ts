import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private _currentMonth: number;
  private _currentYear: number;

  private dates$: BehaviorSubject<Array<Date>> = new BehaviorSubject<Array<Date>>([]);
  get datesObs(): Observable<Array<Date>> { return this.dates$.asObservable(); }

  constructor() {
    const date = new Date();

    this._currentMonth = date.getMonth(); 
    this._currentYear = date.getFullYear(); 

    this.setMonth(this._currentYear, this._currentMonth);
  }

  setPreviousMonth() {
    this.setMonth(this._currentYear, this._currentMonth = this._currentMonth - 1);
  }

  setNextMonth() {
    this.setMonth(this._currentYear, this._currentMonth = this._currentMonth + 1);
  }

  private setMonth(year: number, month: number) {
    const dates = new Array<Date>();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    while (firstDay <= lastDay) {
      dates.push(new Date(firstDay));
      firstDay.setDate(firstDay.getDate() + 1);
    }

    this.dates$.next(dates);
  }
}
