import { Avatar, Text, Group, Button } from '@mantine/core';
import React from 'react';
import styles from './styles.module.scss';

interface CardInfoProps {
  avatar: any;
  name: string;
  title: string;
  phone: string;
  email: string;
  link: string;
}

export default function CardInfo({
  avatar,
  name,
  title,
  phone,
  email,
  link,
}: CardInfoProps) {
  return (
    <div style={{ margin: 10 }}>
      <Group noWrap align="strech">
        <Avatar size={50} radius="xl" className={styles.avatarIcons}>
          {avatar}
        </Avatar>
        <div>
          <Text size="md" weight={500}>
            {title}
          </Text>

          <Text size="md" weight={400}>
            {name}
          </Text>

          <Group noWrap spacing={10} mt={4}>
            <Text size="md" weight={400}>
              {email}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={4}>
            <Text size="md" weight={400}>
              {phone}
            </Text>
          </Group>
          <Group spacing={10} mt={5} position="center">
            <Button variant="light" className={styles.cardInfoIcons}>
              {link}{' '}
            </Button>
          </Group>
        </div>
      </Group>
    </div>
  );
}
