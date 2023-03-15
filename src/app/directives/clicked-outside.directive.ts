import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[clickedOutside]'
})
export class ClickedOutsideDirective {

  constructor(private el: ElementRef) { }

  @Output() public clicked = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any) {
    if (this.el.nativeElement == target) {
      this.clicked.emit(target);
    }
  }

}
