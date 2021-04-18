import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServerStateService } from '../server-state.service';

@Component({
  selector: 'app-server-input',
  templateUrl: './server-input.component.html',
  styleUrls: ['./server-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServerInputComponent implements OnInit {

  constructor(private serverState: ServerStateService, private cdr: ChangeDetectorRef, private zone: NgZone) { }
  serverName;

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => (
      // this.cdr.detach(),
      this.serverName = new FormControl()
    )
    );
  }
  onAdd() {
    this.serverState.setContents({
      name: this.serverName.value,
      serverState: this.isServerOn()
    });
  }
  isServerOn() {
    console.log(this.serverName.value);
    return this.serverName.value.length % 2 === 0
  }
  generateRandomNumber(length): number {
    return Math.floor(Math.random() * length + 1)
  }
}
