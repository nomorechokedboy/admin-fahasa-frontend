import { ReactNode } from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import styles from './styles.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.body}>
      <SideBar />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
