import { Component } from '@angular/core';
import { TestDataHelperService } from '../services/test-data-helper.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  testDates: any;

  constructor(public testDataHelper: TestDataHelperService) { 
    this.testDates = testDataHelper.getTestDateArray();
  }
}
