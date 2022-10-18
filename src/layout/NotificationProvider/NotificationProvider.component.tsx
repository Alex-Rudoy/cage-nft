import React from 'react';

import { NotificationComponent as Notification } from '@components/Notification/Notification.component';

import { useNotificationsSelector } from '@store/misc/notifications/useNotificationsSelector';

import styles from './NotificationProvider.module.scss';

export const NotificationProvider: React.FC = () => {
  const notifications = useNotificationsSelector();

  return (
    <div className={styles.notificationWrapper}>
      {notifications.map((notification) => (
        <Notification key={notification.id} {...notification} />
      ))}
    </div>
  );
};
