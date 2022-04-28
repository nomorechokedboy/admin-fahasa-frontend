import React from 'react';
import { Avatar, Table, Group, Text, ScrollArea } from '@mantine/core';
import styles from './styles.module.scss';

interface TableDetailProps {
  data: {
    image: string;
    name: string;
    price: string;
    quantity: number;
    total: string;
  }[];
}

export default function TableDetail({ data }: TableDetailProps) {
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={40} src={item.image} />
          <div>
            <Text size="md" weight={600}>
              {item.name}
            </Text>
          </div>
        </Group>
      </td>

      <td>
        <Text size="md" weight={600}>
          {item.price}
        </Text>
      </td>

      <td>
        <Text size="md" weight={600}>
          {item.quantity}
        </Text>
      </td>

      <td>
        <Text size="md" weight={600}>
          {item.total}
        </Text>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table
        sx={{ minWidth: 800 }}
        verticalSpacing="sm"
        className={styles.tableContainer}
      >
        <thead>
          <tr>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
