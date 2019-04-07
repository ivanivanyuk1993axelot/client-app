import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {NotificationMessageListComponent} from '../notification-message-list/notification-message-list.component';
import {BehaviorSubject, timer} from 'rxjs';
import {NotificationMessage} from '../notification-message-list/notification-message';
import {distinctUntilChanged, first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _hasMessageBS$: BehaviorSubject<boolean>;
  private _increment = 0;
  private _messageListBS$ = new BehaviorSubject<Array<NotificationMessage>>([]);

  constructor(
    private _matSnackBar: MatSnackBar,
  ) {
    this._hasMessageBS$ = new BehaviorSubject<boolean>(this._messageListBS$.getValue().length > 0);
    this._messageListBS$.subscribe(messageList => {
      this._hasMessageBS$.next(messageList.length > 0);
    });

    this._hasMessageBS$.pipe(
      distinctUntilChanged(),
    ).subscribe(hasMessage => {
      if (hasMessage) {
        this._matSnackBar.openFromComponent(NotificationMessageListComponent, {
          data: {
            messageListBS$: this._messageListBS$,
          },
        });
      } else {
        this._matSnackBar.dismiss();
      }
    });
  }

  public pushMessage() {
    const increment = this._increment++;
    const messageList = this._messageListBS$.getValue();
    messageList.push({
      id: increment,
      text: increment.toString(),
      typeName: 'info',
    });
    this._messageListBS$.next(messageList);

    timer(1000).pipe(
      first(),
    ).subscribe(() => {
      console.log(this._increment);
      this._messageListBS$.next(
        this._messageListBS$.getValue().filter(message => message.id !== increment),
      );
    });
  }
}
