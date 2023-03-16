import { Component, Input } from '@angular/core';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'todos-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {
  @Input() fromDate: Date;
  @Input() toDate: Date;

  constructor(private dateService: DateService) { }

  onPrevious_Click() { this.dateService.setPreviousMonth(); }

  onNext_Click() { this.dateService.setNextMonth(); }
}
