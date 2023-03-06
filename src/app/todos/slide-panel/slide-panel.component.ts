import { Component } from '@angular/core';
import { SlidePanelHelperService } from 'src/app/services/helpers/slide-panel-helper.service';

@Component({
  selector: 'todos-slide-panel',
  templateUrl: './slide-panel.component.html',
  styleUrls: ['./slide-panel.component.scss']
})
export class SlidePanelComponent {

  constructor(public sphService: SlidePanelHelperService) { }

  getVisibility(): string {
    return this.sphService.isVisible ? 'show' : 'hide';
  }
}
