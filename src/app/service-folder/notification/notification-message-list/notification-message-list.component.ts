import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';
import {NotificationMessageListData} from './notification-message-list-data';

@Component({
  selector: 'app-notification-message-list',
  templateUrl: './notification-message-list.component.html',
  styleUrls: ['./notification-message-list.component.scss']
})
export class NotificationMessageListComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: NotificationMessageListData,
  ) {
  }
}
