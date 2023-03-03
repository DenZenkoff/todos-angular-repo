import { Component } from '@angular/core';
import { RecordsHelperService } from 'src/app/services/records-helper.service';

@Component({
  selector: 'todos-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent {

  constructor(private recordsHelper: RecordsHelperService) { }
}
