import OrderRow from './components/OrderRow';
import { Table } from '@mantine/core';
import { Key } from 'react';
import Order from '@/types/order';
import styles from './styles.module.scss';

type OrderTableProps = {
  header?: string[];
  data: Order[];
};

export default function OrderTable({ data, header }: OrderTableProps) {
  return (
    <div className={styles.tableWrapper}>
      <Table verticalSpacing="sm" highlightOnHover fontSize="md">
        <thead>
          <tr>
            {header?.map((h: string, i: Key) => (
              <th className={styles.header} key={i} children={h} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((o: Order, i: Key) => (
            <OrderRow key={i} {...o} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
