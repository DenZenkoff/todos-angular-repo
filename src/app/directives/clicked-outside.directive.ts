import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[todoClickedOutside]'
})
export class ClickedOutsideDirective {

  constructor(private el: ElementRef) { }

  @Output() public clickedOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any) {
    if (this.el.nativeElement == target) {
      this.clickedOutside.emit(target);
    }
  }

}
