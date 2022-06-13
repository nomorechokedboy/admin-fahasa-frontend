import { Stack } from '@mantine/core';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface HeaderReviewPageProps {
  children: ReactNode;
}
export default function ReviewPageHeader({ children }: HeaderReviewPageProps) {
  return (
    <Stack className={styles.container}>
      <div className={styles.contentHeader}>
        <h2>Reviews</h2>
      </div>
      {children}
    </Stack>
  );
}
