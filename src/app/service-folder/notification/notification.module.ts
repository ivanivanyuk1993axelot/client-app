import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSnackBarModule} from '@angular/material';
import {NotificationMessageListComponent} from './notification-message-list/notification-message-list.component';

@NgModule({
  declarations: [
    NotificationMessageListComponent,
  ],
  entryComponents: [
    NotificationMessageListComponent,
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
  ],
})
export class NotificationModule {
}
