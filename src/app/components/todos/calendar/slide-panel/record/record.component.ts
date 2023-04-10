import { Component, Input } from '@angular/core';
import { RecordData } from 'src/app/classes/record-data';
import { RecordService } from 'src/app/services/components/record.service';

@Component({
  selector: 'slide-panel-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent {
  @Input() date: Date;
  @Input() record: RecordData;

  constructor(public recordService: RecordService) { }
}
