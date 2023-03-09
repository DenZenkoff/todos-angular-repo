import { Injectable } from '@angular/core';
import { TestDataHelperService } from './test-data/test-data-helper.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private tdhService: TestDataHelperService) { }

  getRecordsByDate(date: Date): Array<string> { 
    return this.tdhService.getTestDateArray(); 
  }
}
