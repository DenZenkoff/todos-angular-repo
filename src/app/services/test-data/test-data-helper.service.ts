import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestDataHelperService {

  constructor() { }

  getTestDateArray(): Array<string> { 
    return  [ 'record1',  'record2', 'record3', 'record3', 'record4', 'record5', 'record6' ]; 
  }
}
