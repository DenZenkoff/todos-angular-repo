import { Injectable } from '@angular/core';
import { RecordData } from 'src/app/classes/record-data';
import { TodoDataService } from '../todo-data.service';

@Injectable({
  providedIn: 'root'
})
export class RecordDataHelperService {
  private _records: Array<RecordData>;
  set records(records: Array<RecordData>) { this._records = records; }

  constructor(private tdServise: TodoDataService) {}

  addRecord() {
    const id = this._records.length - 1;
    const record = new RecordData();

    record.id = id > -1 ? this._records[id].id + 1 : 1;
    record.text = '';

    this._records.push(record);
  }

  saveRecord(date: Date, id: number) {
    let record = this._records.find(record => record.id == id);
    if (record) {
      record.isNew = false;
      
      this.tdServise.saveTodo(date, record);
    }
  }

  removeRecord(date: Date, id: number) {      
    const record = this._records.find(record => record.id == id);
    if (record) {
      const index = this._records.findIndex(todo => todo.id == id);
      this._records.splice(index, 1);

      if (!record.isNew) 
        this.tdServise.removeTodo(date, id);
    }
  }
}
