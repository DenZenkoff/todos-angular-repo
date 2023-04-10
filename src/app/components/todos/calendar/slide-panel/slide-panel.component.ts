import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { SlidePanelData } from 'src/app/classes/slide-panel-data';
import { Styles } from 'src/app/enums/styles';
import { SlidePanelService } from 'src/app/services/components/slide-panel.service';

@Component({
  selector: 'calendar-slide-panel',
  templateUrl: './slide-panel.component.html',
  styleUrls: ['./slide-panel.component.scss']
})
export class SlidePanelComponent implements OnInit, OnDestroy {
  private subsciptions$: Subscription[] = [];

  data: SlidePanelData;
  displayStyle: string;

  constructor(private slidePanelService: SlidePanelService) { }
  
  ngOnInit(): void {
    this.subsciptions$.push(this.slidePanelService.dataObs
      .subscribe(data => this.data = data)
    );
    this.subsciptions$.push(this.slidePanelService.isVisibleObs
      .subscribe(isVisible => this.displayStyle = isVisible ? Styles.show : Styles.hide)
    );
  }

  ngOnDestroy(): void {
    this.subsciptions$.forEach(s => s.unsubscribe());
    this.subsciptions$ = [];
  }

  onClose_Click() {
    this.slidePanelService.closeSlidePanel();
  }

  onAddRow_Click() {
    this.slidePanelService.addEmptyRecordRow();
  }
}
