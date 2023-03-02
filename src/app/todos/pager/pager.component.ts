import { Component, Input } from '@angular/core';

@Component({
  selector: 'todos-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {
  @Input() fromDate: Date;
  @Input() toDate: Date;

  pagerLeftClick() {}

  pagerRightClick() {}
}
