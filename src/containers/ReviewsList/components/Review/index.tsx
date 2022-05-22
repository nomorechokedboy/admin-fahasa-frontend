import {
  Button,
  Divider,
  Group,
  Modal,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import Star from '../Star';
import styles from './styles.module.scss';
import { useState } from 'react';
import { useToggle } from '@mantine/hooks';
import ConfirmModal from '@/components/ConfirmModal';
import { deleteReview } from '@/api/review';
import { useDispatch } from 'react-redux';
import { setError, setNotification } from '@/redux';
interface ReviewProps {
  id?: string;
  bookName?: string;
  userName?: string;
  stars?: number | 0;
  date?: string;
  isLoading: boolean;
  content?: string;
  onDelete: (id: string) => void;
}

export default function Review({
  id,
  bookName,
  userName,
  stars,
  date,
  isLoading,
  content,
  onDelete,
}: ReviewProps) {
  const [opened, setOpened] = useState(false);
  const dispatch = useDispatch();
  const [isModalOpen, modalOpenToggle] = useToggle(false, [true, false]);
  const handleModalClick = () => {
    modalOpenToggle();
  };
  const handleDelete = () => {
    id &&
      deleteReview('', id)
        .then((data) => {
          if (data) {
            modalOpenToggle();
            dispatch(setNotification(`The review: ${id} has been deleted`));
            onDelete(id);
          }
        })
        .catch((error) => {
          modalOpenToggle(!isModalOpen);
          dispatch(setError(error?.message));
        });
  };
  return (
    <>
      <ConfirmModal
        message="Do you want to remove the item?"
        opened={isModalOpen}
        onClose={handleModalClick}
        onOkClick={handleDelete}
        size="xs"
        centered
      />

      <Modal
        centered
        withCloseButton={true}
        opened={opened}
        onClose={() => setOpened(false)}
        title={<Title order={3}>{bookName}</Title>}
      >
        <Divider />
        <Stack className={styles.modalContainer}>
          <Stack spacing="xs">
            <Group position="apart">
              <Text weight={500} size="lg">
                {userName}
              </Text>
              <Text color="gray" size="sm">
                {date}
              </Text>
            </Group>
            <Star voted={stars!} total={5} size={15} />
          </Stack>
          <Text>{content}</Text>
        </Stack>
      </Modal>

      <td>
        <Skeleton className={styles.elementContainer} visible={isLoading}>
          <Text>{id}</Text>
        </Skeleton>
      </td>
      <td>
        <Skeleton className={styles.elementContainer} visible={isLoading}>
          <Text weight={600} className={styles.textName}>
            {bookName}
          </Text>
        </Skeleton>
      </td>
      <td>
        <Skeleton className={styles.elementContainer} visible={isLoading}>
          <Text className={styles.textName}>{userName}</Text>
        </Skeleton>
      </td>
      <td className={styles.forResponsive}>
        <Skeleton className={styles.elementContainer} visible={isLoading}>
          <Star voted={stars!} total={5} size={20}></Star>
        </Skeleton>
      </td>
      <td className={styles.forResponsive}>
        <Skeleton className={styles.elementContainer} visible={isLoading}>
          <Text>{date}</Text>
        </Skeleton>
      </td>
      <td>
        <div className={styles.functionContainer}>
          <div className={styles.buttonDetail}>
            <Button onClick={() => setOpened(true)} loading={isLoading}>
              Detail
            </Button>
          </div>
          <div className={styles.menu}>
            <Button color="red" loading={isLoading} onClick={handleModalClick}>
              {' '}
              Delete{' '}
            </Button>
          </div>
        </div>
      </td>
    </>
  );
}
