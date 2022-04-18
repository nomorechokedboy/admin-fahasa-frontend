import OrderRow from '../OrderRow';
import BoxLayout from '../BoxLayout';
import { Card, Table } from '@mantine/core';
import { Key } from 'react';
import styles from './styles.module.scss';

type ListOrderProps = {
  data: any;
};

export default function ListOrder({ data }: ListOrderProps) {
  return (
    <Card radius="sm" withBorder>
      <BoxLayout title="Lastest orders">
        <div className={styles.tableWrapper}>
          <Table verticalSpacing="sm" highlightOnHover fontSize="md">
            <tbody>
              {data.map((d: any, i: Key) => (
                <OrderRow key={i} {...d} />
              ))}
            </tbody>
          </Table>
        </div>
      </BoxLayout>
    </Card>
  );
}
