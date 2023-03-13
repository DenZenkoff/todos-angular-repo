import { Injectable } from '@angular/core';
import { RecordData } from '../classes/record-data';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  saveTodo(date: Date, record: RecordData) {
    const key = date.toDateString();
    const todos = this.getSavedTodos(key);

    if (todos.length > 0) {
      const index = todos.findIndex(todo => todo.id == record.id);
      if (index != -1) 
        todos[index].text = record.text 
      else 
        todos.push(record);
      localStorage.setItem(key, this.parseArrayToJSONString(todos));
    } else {
      const todo = [ record ];
      localStorage.setItem(key, this.parseArrayToJSONString(todo));
    }
  }

  getTodos(date: Date): Array<RecordData> {
    return this.getSavedTodos(date.toDateString());
  }

  removeTodo(date: Date, id: number) {
    const key = date.toDateString();
    const todos = this.getSavedTodos(key);

    if (todos) {
      const index = todos.findIndex(todo => todo.id == id);
      if (index != -1) 
        todos.splice(index, 1);

      localStorage.setItem(key, this.parseArrayToJSONString(todos));
    }
  }

  private getSavedTodos(key: string): Array<RecordData> {
    const records = localStorage.getItem(key);

    return records ? this.parseJsonStringToArray(records) : [];
  }

  private parseArrayToJSONString(records: Array<RecordData>): string {
    return JSON.stringify(records);
  }

  private parseJsonStringToArray(jsonString: string): Array<RecordData> {
    return JSON.parse(jsonString);
  }
}
