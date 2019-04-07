export interface NotificationMessage {
  icon?: string;
  id: number;
  text?: string;
  typeName:
    'danger' |
    'info' |
    'success' |
    'warning';
}
