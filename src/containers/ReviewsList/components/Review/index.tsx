import { Button, Menu, Skeleton, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import Star from '../Star';
import styles from './styles.module.scss';
import { FiMoreHorizontal } from 'react-icons/fi';
interface ReviewProps {
  id?: string;
  bookName?: string;
  userName?: string;
  stars?: number | 0;
  date?: string;
  isLoading: boolean;
}

export default function Review({
  id,
  bookName,
  userName,
  stars,
  date,
  isLoading,
}: ReviewProps) {
  return (
    <>
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
          <Star voted={stars!} total={5}></Star>
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
            <Button loading={isLoading}>Detail</Button>
          </div>
          <div className={styles.menu}>
            <Menu
              control={
                <Button>
                  <FiMoreHorizontal color="white" />
                </Button>
              }
              transition="rotate-right"
              transitionDuration={100}
              transitionTimingFunction="ease"
              gutter={10}
            >
              <Menu.Item>
                {' '}
                <Link to="">View Detail</Link>
              </Menu.Item>
              <Menu.Item>
                {' '}
                <Link to="">Edit Info</Link>
              </Menu.Item>
              <Menu.Item>
                {' '}
                <Link to="">Delete</Link>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </td>
    </>
  );
}
