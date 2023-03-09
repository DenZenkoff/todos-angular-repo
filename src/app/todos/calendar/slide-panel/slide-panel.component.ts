import { Component } from '@angular/core';
import { SlidePanelData } from 'src/app/classes/slide-panel-data';
import { SlidePanelHelperService } from 'src/app/services/helpers/slide-panel-helper.service';

@Component({
  selector: 'calendar-slide-panel',
  templateUrl: './slide-panel.component.html',
  styleUrls: ['./slide-panel.component.scss']
})
export class SlidePanelComponent {
  public data: SlidePanelData = new SlidePanelData();

  constructor(public sphService: SlidePanelHelperService) {
    this.data = sphService.data;
  }
}
