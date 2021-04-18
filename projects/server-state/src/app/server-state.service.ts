import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServerState } from './server-state';
@Injectable({
  providedIn: 'root'
})
export class ServerStateService {
    private _state = new BehaviorSubject<ServerState | null>(null);
  readonly contents = this._state.asObservable();

  setContents(value: ServerState): void {
    this._state.next(value);
  }

  clearContents(): void {
    this._state.next(null);
  }
}
