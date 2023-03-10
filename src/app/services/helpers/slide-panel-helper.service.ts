import { Injectable } from '@angular/core';
import { SlidePanelData } from 'src/app/classes/slide-panel-data';
import { Styles } from 'src/app/enums/styles';
import { DataService } from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class SlidePanelHelperService {
  private _isVisible: boolean; 
  get isVisible(): boolean { console.warn(this._isVisible); return this._isVisible; }
  
  private _data: SlidePanelData;
  get data(): SlidePanelData { return this._data; }

  constructor(private dataService: DataService) { 
    this.setDefault();
  }

  openSlidePanel(date: Date) {
    if (!this._isVisible) {
      this._isVisible = true;
      this._data = this.getData(date);
    }
  }

  closeSlidePanel() {
    this._isVisible = false;
  }

  getVisibilityStyle(): string {
    return this._isVisible ? Styles.show : Styles.hide;
  }

  private getData(date: Date): SlidePanelData {
    const data = new SlidePanelData();
    data.date = new Date(date);
    data.records = this.dataService.getRecordsByDate(date);

    return data;
  }

  private setDefault(): void {
    this._data  = new SlidePanelData();
    this._data.date = new Date();
    this._data.records = [];
  }
}
