import clx from 'classnames';
import { ReactNode } from 'react';
import Header from '../Header';
import Sidebar from '../SideBar';
import styles from './styles.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.body}>
      <Sidebar />
      <div className={styles.container}>
        <Header />
        <main className={clx(styles.main)}>{children}</main>
      </div>
    </div>
  );
}
