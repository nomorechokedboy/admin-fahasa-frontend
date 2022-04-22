import { closeNotification, getNotificationState } from '@/redux';
import { Notification } from '@mantine/core';
import { useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';

export default function NotificationDialog() {
  const { message, isError } = useSelector(getNotificationState);
  const dispatch = useDispatch();
  const timeout = useRef<number>(0);

  const handleClose = () => {
    dispatch(closeNotification());
  };

  const handleAutoClose = () => {
    // auto close after 3s
    timeout.current = setTimeout(handleClose, 3000);
  };

  useEffect(() => {
    handleAutoClose();

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
          onMouseLeave={handleAutoClose}
          onClose={handleClose}
          icon={<AiOutlineClose />}
          title={isError ? 'Server error' : 'Notification!'}
          color={isError ? 'red' : 'green'}
          children={message}
        />
      )}
    </>
  );
}
