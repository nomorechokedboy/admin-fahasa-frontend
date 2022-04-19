import { closeNotification, getNotificationState } from '@/redux';
import { Notification, NotificationProps } from '@mantine/core';
import { useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';

type NotificationDialogProps = NotificationProps & {
  message?: string;
};

export default function NotificationDialog({
  message,
  ...NotificationDialogProps
}: NotificationDialogProps) {
  const notification = useSelector(getNotificationState);
  const dispatch = useDispatch();
  const timeout = useRef<number>();

  const cancelDelay = () => clearInterval(timeout.current);

  const handleCloseNotification = () => {
    timeout.current = setTimeout(() => {
      dispatch(closeNotification());
    }, 3000);
  };

  useEffect(() => {
    handleCloseNotification();

    return cancelDelay;
  }, [notification.message]);

  return (
    <>
      {notification.message && (
        <Notification
          className={styles.notification}
          onClose={handleCloseNotification}
          icon={<AiOutlineClose />}
          title={notification.isError ? 'Server error' : 'Notification!'}
          color={notification.isError ? 'red' : 'green'}
        >
          {notification.message}
        </Notification>
      )}
    </>
  );
}
