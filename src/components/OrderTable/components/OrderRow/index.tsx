import clx from 'classnames';
import { Button, Menu, Skeleton, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { DETAIL } from '@/configs';
type OrderRowProps = {
  id?: string;
  name?: string;
  email?: string;
  totalPayment?: number;
  orderStatus?: string;
  date?: string;
  rootDir?: string;
  userID?: string;
  loading: boolean;
};

export default function OrderRow({
  id,
  name,
  email,
  totalPayment,
  orderStatus,
  date,
  rootDir,
  userID,
  loading,
}: OrderRowProps) {
  return (
    <tr>
      <td>
        <Skeleton visible={loading}>{id}</Skeleton>
      </td>
      <td>
        <Text weight={600}>
          <Skeleton visible={loading}>{name}</Skeleton>
        </Text>
      </td>
      <td>
        <Skeleton visible={loading}>{email}</Skeleton>
      </td>
      <td>
        <Skeleton visible={loading}>{totalPayment!}vnd</Skeleton>
      </td>
      <td>
        <span
          className={clx(styles.orderStateBox, {
            [styles.delivered]: orderStatus === 'Delivered',
            [styles.pending]: orderStatus === 'Pending',
            [styles.cancelled]: orderStatus === 'Cancelled',
          })}
        >
          {orderStatus}
        </span>
      </td>
      <td>
        <Skeleton visible={loading}>{date}</Skeleton>
      </td>
      <td className={styles.buttonContainer}>
        <Link to={`${rootDir}/${DETAIL}/${userID}`}>
          <Button loading={loading}>Detail</Button>
        </Link>
        <Menu control={<Button loading={loading}>...</Button>}>
          <Menu.Item>View detail</Menu.Item>
          <Menu.Item>Edit info</Menu.Item>
          <Menu.Item color="red">Delete</Menu.Item>
        </Menu>
      </td>
    </tr>
  );
}
