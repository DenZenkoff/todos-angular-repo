import { Component, HostListener } from '@angular/core';
import { DateService } from 'src/app/services/date.service';
import { SlidePanelHelperService } from 'src/app/services/helpers/slide-panel-helper.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  constructor(
    public dateService: DateService, 
    public sphService: SlidePanelHelperService) { }

  @HostListener('document:keydown.escape', ['$event']) 
  onEscapeKeydownHanlder(event: KeyboardEvent) {
    this.sphService.closeSlidePanel();
  }

  @HostListener('document:keydown.arrowleft', ['$event']) 
  onArrowleftKeydownHanlder(event: KeyboardEvent) {
    this.dateService.getPreviousMonth();
  }  
  
  @HostListener('document:keydown.arrowright', ['$event']) 
  onArrowRightKeydownHanlder(event: KeyboardEvent) {
    this.dateService.getNextMonth();    
  }

  // @HostListener('document:click', ['$event.target'])
  // onDocumentClick(target: any) {
  //   const slidePanel = 'slide-panel-wrapper show'

  //   // console.warn(target);
  //   // console.warn(slidePanel);
  //   // console.warn(target == slidePanel);

  //   if (this.sphService.isVisible)
  //     this.sphService.closeSlidePanel
  // }
}
