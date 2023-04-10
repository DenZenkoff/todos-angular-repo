import { Injectable } from '@angular/core';
import { SlidePanelData } from 'src/app/classes/slide-panel-data';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { RecordService } from 'src/app/services/components/record.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlidePanelService {
  private _isVisible$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  get isVisibleObs(): Observable<boolean> { return this._isVisible$.asObservable(); }

  private _data$: BehaviorSubject<SlidePanelData> = new BehaviorSubject(new SlidePanelData());
  get dataObs(): Observable<SlidePanelData> { return this._data$.asObservable(); }

  constructor(private recordService: RecordService, 
              private todoDataService: TodoDataService) { }

  openSlidePanel(date: Date) {
    const data = this.getData(date);
    
    this._isVisible$.next(true);
    this._data$.next(data);

    this.recordService.records = data.records;
  }

  closeSlidePanel() {
    this._isVisible$.next(false);
  }

  addEmptyRecordRow() {
    this.recordService.addRecord();
  }

  private getData(date: Date): SlidePanelData {
    const day = new Date(date);
    const records = this.todoDataService.getTodos(date);

    return new SlidePanelData(day, records);
  }
}
