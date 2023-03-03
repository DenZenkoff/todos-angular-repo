import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsHelperService {
  public isHidden: boolean = true;

  constructor() { }

  changeVisibility(): boolean {
    return this.isHidden = !this.isHidden;
  }
}
