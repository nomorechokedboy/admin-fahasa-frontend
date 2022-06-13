import { Text, Button } from '@mantine/core';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface CTAProps {
  icon: ReactNode;
  message: string;
  onClick?(): void;
  label?: string;
  title?: string;
  leftIcon?: ReactNode;
}

export default function CTA({
  icon,
  message,
  label,
  title,
  ...buttonProps
}: CTAProps) {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>{icon}</div>
      {title && <Text size="xl">{title}</Text>}
      <Text size="lg" align="center">
        {message}
      </Text>
      {label && <Button {...buttonProps}>{label}</Button>}
    </div>
  );
}
