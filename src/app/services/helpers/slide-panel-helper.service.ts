import { Injectable } from '@angular/core';
import { CommonStyles } from 'src/app/enums/common-styles';


@Injectable({
  providedIn: 'root'
})
export class SlidePanelHelperService {
  public displayStyle: string = CommonStyles.hide;

  constructor() { }

  changeDisplayStyle(): string {
    this.displayStyle = this.displayStyle == CommonStyles.hide ? CommonStyles.show : CommonStyles.hide;
    return this.displayStyle;
  }

  closeSlidePanel(): string {
    return this.displayStyle = CommonStyles.hide;
  }
}
