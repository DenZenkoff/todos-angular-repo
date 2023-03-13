import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() onSave_Event = new EventEmitter<RecordData>();
  @Output() onDelete_Event = new EventEmitter<RecordData>();

  constructor(public rdhService: RecordDataHelperService) { }
}
