import {NotificationMessage} from './notification-message';
import {BehaviorSubject} from 'rxjs';

export interface NotificationMessageListData {
  messageListBS$: BehaviorSubject<Array<NotificationMessage>>;
}
