import { Component } from '@angular/core';
import { RecordsHelperService } from '../services/records-helper.service';
import { TestDataHelperService } from '../services/test-data-helper.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  testDates: any;

  constructor(public testDataHelper: TestDataHelperService, public recordsHelper: RecordsHelperService) { 
    this.testDates = testDataHelper.getTestDateArray();
  }
}
