export interface NotificationApplicationListItem {
  applicationId: number;
  notify: boolean;
}

export interface NotificationApplicationRequest {
  notifications: NotificationApplicationListItem[];
}