import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private _currentMonth: number;
  private _currentYear: number;

  constructor() {
    const date = new Date();

    this._currentMonth = date.getMonth(); 
    this._currentYear = date.getFullYear(); 
  }

  getCurrentFirstDay(): Date {
    return this.gatFirstDay(this._currentYear, this._currentMonth);
  }

  getCurrentLastDay(): Date {
    return this.gatLastDay(this._currentYear, this._currentMonth);
  }

  getCurrentMonth(): Array<Date> {
    return this.getMonth(this._currentYear, this._currentMonth);
  }

  getNextMonth(): Array<Date> {
    return this.getMonth(this._currentYear, this._currentMonth = this._currentMonth + 1);
  }

  getPreviousMonth(): Array<Date> {
    return this.getMonth(this._currentYear, this._currentMonth = this._currentMonth - 1);
  }

  private gatFirstDay(year: number, month: number): Date {
    return new Date(year, month, 1);
  }  
  
  private gatLastDay(year: number, month: number): Date {
    return new Date(year, month + 1, 0);
  }

  private getMonth(year: number, month: number): Array<Date> {
    const dates = new Array<Date>();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const dayOfWeek = firstDay.getDay();

    if (dayOfWeek == 0) {
      for(let i = 6; i > 0; i--)
        dates.length++;
    } else {
      for(let i = dayOfWeek - 1; i > 0; i--)
        dates.length++; 
    }

    while (firstDay <= lastDay) {
      dates.push(new Date(firstDay));
      firstDay.setDate(firstDay.getDate() + 1);
    }

    if (dates.length < 42) {
      for(let i = dates.length - 1; i < 42; i++)
        dates.length++;
    }

    return dates;
  }
}
