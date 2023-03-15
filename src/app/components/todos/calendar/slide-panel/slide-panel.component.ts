import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SlidePanelData } from 'src/app/classes/slide-panel-data';
import { SlidePanelHelperService } from 'src/app/services/helpers/slide-panel-helper.service';

@Component({
  selector: 'calendar-slide-panel',
  templateUrl: './slide-panel.component.html',
  styleUrls: ['./slide-panel.component.scss']
})
export class SlidePanelComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<boolean> = new Subject<boolean>();

  data: SlidePanelData;

  constructor(private sphService: SlidePanelHelperService) { }
  
  ngOnInit(): void {
    this.sphService.dataObs
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => this.data = data);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
