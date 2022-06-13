import Text from '@/components/Text';
import { Skeleton } from '@mantine/core';
import { Children, ReactNode } from 'react';
import styles from './styles.module.scss';

interface FormSectionProps {
  children: ReactNode;
  label: string;
  loading?: boolean;
}

export default function FormSection({
  children,
  label,
  loading,
}: FormSectionProps) {
  return (
    <div className={styles.row}>
      <div className={styles.colLeft}>
        <Skeleton visible={loading}>
          <Text size="lg" font="bold">
            {label}
          </Text>
        </Skeleton>
      </div>
      <div className={styles.colRight}>
        {Children.map(children, (child, i) => (
          <div className={styles.inputWrapper} key={i}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
