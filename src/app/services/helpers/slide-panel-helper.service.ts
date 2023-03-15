import { Injectable } from '@angular/core';
import { SlidePanelData } from 'src/app/classes/slide-panel-data';
import { Styles } from 'src/app/enums/styles';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { RecordDataHelperService } from 'src/app/services/helpers/record-data-helper.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlidePanelHelperService {
  private _isVisible: boolean; 
  
  private _data$: BehaviorSubject<SlidePanelData> = new BehaviorSubject(new SlidePanelData(new Date(), []));
  get dataObs(): Observable<SlidePanelData> { return this._data$.asObservable(); }

  constructor(private rdhService: RecordDataHelperService, 
              private tdService: TodoDataService) { }

  openSlidePanel(date: Date) {
    if (!this._isVisible) {
      const data = this.getData(date);

      this._isVisible = true;
      this._data$.next(data);

      this.rdhService.records = data.records;
    }
  }

  closeSlidePanel() {
    this._isVisible = false;
  }

  getVisibilityStyle(): string {
    return this._isVisible ? Styles.show : Styles.hide;
  }

  addEmptyRecordRow() {
    this.rdhService.addRecord();
  }

  private getData(date: Date): SlidePanelData {
    return new SlidePanelData(new Date(date), this.tdService.getTodos(date));
  }
}
