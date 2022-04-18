import { Notification, NotificationProps } from '@mantine/core';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

type NotificationDialogProps = NotificationProps & {
  message?: string;
};

export default function NotificationDialog({
  message,
  ...NotificationDialogProps
}: NotificationDialogProps) {
  const [autoClose, setAutoClose] = useState<boolean>(false);

  // useEffect(() => {
  //     const id = setTimeout(() => {
  //         setAutoClose(true);
  //     }, 3000);

  //     return () => {
  //         setAutoClose(false);
  //         clearTimeout(id);
  //     };
  // }, [message]);

  return (
    <>
      {!autoClose && (
        <Notification
          className={styles.notification}
          {...NotificationDialogProps}
        >
          {message}
        </Notification>
      )}
    </>
  );
}
