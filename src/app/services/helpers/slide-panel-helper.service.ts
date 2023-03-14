import { Injectable } from '@angular/core';
import { SlidePanelData } from 'src/app/classes/slide-panel-data';
import { Styles } from 'src/app/enums/styles';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { RecordDataHelperService } from 'src/app/services/helpers/record-data-helper.service';

@Injectable({
  providedIn: 'root'
})
export class SlidePanelHelperService {
  private _isVisible: boolean; 
    
  private _data: SlidePanelData; 
  get data(): SlidePanelData { return this._data; }

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

  addEmptyRecordRow() {
    this.rdhService.addRecord();
  }

  private getData(date: Date): SlidePanelData {
    return new SlidePanelData(new Date(date), this.tdService.getTodos(date));
  }

  private setDefault(): void {
    this._data  = new SlidePanelData(new Date(), []);
  }
}
