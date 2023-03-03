import { Component, HostListener } from '@angular/core';
import { DateService } from 'src/app/services/date.service';
import { SlidePanelHelperService } from 'src/app/services/helpers/slide-panel-helper.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  constructor(public dService: DateService, public sphService: SlidePanelHelperService) { }

  @HostListener('document:keydown.escape', ['$event']) 
  handleKeyboardEvent(event: KeyboardEvent) {
    this.sphService.closeSlidePanel();
  }
}
