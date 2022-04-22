import { closeNotification, getNotificationState } from '@/redux';
import { Notification } from '@mantine/core';
import { useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';

export default function NotificationDialog() {
  const { message, isError } = useSelector(getNotificationState);
  const dispatch = useDispatch();
  const timeout = useRef<number>();

  const handleManualCloseNotification = () => {
    dispatch(closeNotification());
  };

  const handleAutoCloseNotification = () => {
    timeout.current = setTimeout(() => {
      dispatch(closeNotification());
    }, 3000);
  };

  useEffect(() => {
    handleAutoCloseNotification();

    return cancelDelay;
  }, [message]);

  const cancelDelay = () => {
    clearTimeout(timeout.current);
  };

  return (
    <>
      {message && (
        <Notification
          className={styles.notification}
          onMouseEnter={cancelDelay}
          onClose={handleManualCloseNotification}
          icon={<AiOutlineClose />}
          title={isError ? 'Server error' : 'Notification!'}
          color={isError ? 'red' : 'green'}
        >
          {message}
        </Notification>
      )}
    </>
  );
}
