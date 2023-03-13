import { Injectable } from '@angular/core';
import { RecordData } from 'src/app/classes/record-data';
import { SlidePanelData } from 'src/app/classes/slide-panel-data';
import { Styles } from 'src/app/enums/styles';
import { TodoDataService } from '../todo-data.service';
import { RecordDataHelperService } from './record-data-helper.service';

@Injectable({
  providedIn: 'root'
})
export class SlidePanelHelperService {
  private _isVisible: boolean; 
  get isVisible(): boolean { return this._isVisible; }
  
  private _data: SlidePanelData;

  constructor(private rdhService: RecordDataHelperService, 
              private tdService: TodoDataService) { this.setDefault(); }

  openSlidePanel(date: Date) {
    if (!this._isVisible) {
      this._isVisible = true;
      this._data = this.getData(date);
      this.rdhService.records = this._data.records;
    }
  }

  closeSlidePanel() {
    this._isVisible = false;
  }

  getVisibilityStyle(): string {
    return this._isVisible ? Styles.show : Styles.hide;
  }

  getRecords(): Array<RecordData> {
    return this._data.records;
  }

  getDate(): Date {
    return this._data.date;
  }

  addNewRecord() {
    this.rdhService.addRecord();
  }

  private getData(date: Date): SlidePanelData {
    const data = new SlidePanelData();
    data.date = new Date(date);
    data.records = this.tdService.getTodos(date);

    return data;
  }

  private setDefault(): void {
    this._data  = new SlidePanelData();
    this._data.date = new Date();
    this._data.records = [];
  }
}
