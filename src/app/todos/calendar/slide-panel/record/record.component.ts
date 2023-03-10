import { Component, Input } from '@angular/core';

@Component({
  selector: 'slide-panel-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent {
  @Input() data: string;
}
