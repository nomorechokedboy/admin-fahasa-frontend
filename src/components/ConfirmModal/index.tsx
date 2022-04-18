import { Stack, Group, Button, Modal, ModalProps } from '@mantine/core';
import styles from './styles.module.scss';

type ConfirmModalProps = ModalProps & {
  message: string;
  opened: boolean;
  onClose(): void;
  onOkClick(): void;
};

export default function ConfirmModal({
  message,
  opened,
  onClose,
  onOkClick,
  ...ConfirmModalProps
}: ConfirmModalProps) {
  return (
    <Modal opened={opened} onClose={onClose} {...ConfirmModalProps}>
      <Stack>
        <div className={styles.message}>{message}</div>
        <Group grow>
          <Button onClick={onOkClick} color="blue">
            Ok
          </Button>
          <Button onClick={onClose} color="green">
            Cancel
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
