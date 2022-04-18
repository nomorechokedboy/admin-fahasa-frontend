import NotificationDialog from '@/components/NotificationDiaglog';
import { getNotificationState, setError } from '@/redux';
import clx from 'classnames';
import { ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import Sidebar from '../SideBar';
import styles from './styles.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const notification = useSelector(getNotificationState);
  const dispatch = useDispatch();
  console.log({ message: notification.message });

  const handleCloseNotification = () => {
    dispatch(setError(''));
  };

  return (
    <div className={styles.body}>
      <Sidebar />
      <div className={styles.container}>
        <Header />
        <main className={clx(styles.main)}>{children}</main>
      </div>
      {notification.message && (
        <div className={styles.notifications}>
          <NotificationDialog
            message={notification.message}
            onClose={handleCloseNotification}
            icon={<AiOutlineClose />}
            title={notification.isError ? 'Server error' : 'Notification!'}
            color={notification.isError ? 'red' : 'green'}
          />
        </div>
      )}
    </div>
  );
}
