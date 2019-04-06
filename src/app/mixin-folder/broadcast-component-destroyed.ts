import {Subject} from 'rxjs';

export class BroadcastComponentDestroyed {
  _isComponentDestroyedS$ = new Subject<void>();

  _broadcastComponentDestroyed() {
    this._isComponentDestroyedS$.next();
    this._isComponentDestroyedS$.complete();
  }
}
