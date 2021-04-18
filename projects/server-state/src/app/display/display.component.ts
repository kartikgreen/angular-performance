import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServerState } from '../server-state';
import { ServerStateService } from '../server-state.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent implements OnInit {
  _serverInformation: any = [];

  get serverInformation() {
    return this._serverInformation;
  }
  set serverInformation(value) {
    this._serverInformation.push(value);
    console.log('calling input');
  }
  constructor(private serverState: ServerStateService, private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.serverState.contents.subscribe((ref: ServerState) => {
      if (ref === null) {
        return;
      }
      this.serverInformation = ref;
      this.cdr.detectChanges();
    });
  }
  trackByFn(index, item) {
    return item.serverState
  }
  ngDoCheck() {
    console.log('cd detected');
  }
}
