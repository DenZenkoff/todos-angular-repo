import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SlidePanelHelperService {
  private _isVisible: boolean;

  get isVisible(): boolean {
    return this._isVisible;
  }

  openSlidePanel() {
    this._isVisible = true;
  }

  closeSlidePanel() {
    this._isVisible = false;
  }
}
