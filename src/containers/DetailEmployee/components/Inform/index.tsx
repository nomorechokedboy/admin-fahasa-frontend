import { Stack, Group, Button, Modal, ModalProps } from '@mantine/core';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface InformModalProps {
  message: string;
  opened: boolean;
  onClose(): void;
  icon: ReactNode;
}

export default function Inform({
  message,
  opened,
  onClose,
  icon,
}: InformModalProps) {
  return (
    <Modal opened={opened} onClose={onClose}>
      <Stack>
        <div className={styles.message}>
          {message} {icon}
        </div>
        <Button onClick={onClose} color="green">
          Close
        </Button>
      </Stack>
    </Modal>
  );
}
