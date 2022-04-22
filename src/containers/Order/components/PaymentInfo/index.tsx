import styles from './styles.module.scss';
import react from 'react';
import { Card, Image, Group, Text, Grid, Avatar } from '@mantine/core';

interface PaymentInfoProps {
  title: string;
  image: string;
  id: string;
  name: string;
  phone: string;
}

export default function PaymentInfo({
  title,
  image,
  id,
  name,
  phone,
}: PaymentInfoProps) {
  return (
    <div className={styles.paymentInfoContainer}>
      <Card shadow="lg" p="md">
        <Group>
          <Text size="md" weight={500}>
            {title}
          </Text>
        </Group>

        <Group noWrap spacing={10} mt={10}>
          <Avatar size={25}> {image}</Avatar>

          <Text size="md" weight={400}>
            Master Card: {id}
          </Text>
        </Group>

        <Group noWrap spacing={10} mt={4}>
          <Text size="md" weight={400}>
            Business name: {name}
          </Text>
        </Group>

        <Group noWrap spacing={10} mt={4}>
          <Text size="md" weight={400}>
            Phone: {phone}
          </Text>
        </Group>
      </Card>
    </div>
  );
}
