import clx from 'classnames';
import { Button, Menu, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { DETAIL } from '@/configs';
type OrderRowProps = {
  id: string;
  name: string;
  email: string;
  totalPayment: number;
  orderStatus: string;
  date: string;
  rootDir?: string;
};

export default function OrderRow({
  id,
  name,
  email,
  totalPayment,
  orderStatus,
  date,
  rootDir,
}: OrderRowProps) {
  return (
    <tr>
      <td>{id}</td>
      <td>
        <Text weight={600}>{name}</Text>
      </td>
      <td>{email}</td>
      <td>{totalPayment.toLocaleString()} vnd</td>
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
      <td>{date}</td>
      <td className={styles.buttonContainer}>
        <Link to={`${rootDir}/${DETAIL}`}>
          <Button>Detail</Button>
        </Link>
        <Menu control={<Button>...</Button>}>
          <Menu.Item>View detail</Menu.Item>
          <Menu.Item>Edit info</Menu.Item>
          <Menu.Item color="red">Delete</Menu.Item>
        </Menu>
      </td>
    </tr>
  );
}
