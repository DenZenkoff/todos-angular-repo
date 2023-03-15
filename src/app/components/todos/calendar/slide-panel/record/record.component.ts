import { Component, Input } from '@angular/core';
import { RecordData } from 'src/app/classes/record-data';
import { RecordDataHelperService } from 'src/app/services/helpers/record-data-helper.service';

@Component({
  selector: 'slide-panel-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent {
  @Input() date: Date;
  @Input() record: RecordData;

  constructor(public rdhService: RecordDataHelperService) { }
}
