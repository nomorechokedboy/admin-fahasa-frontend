import ConfirmModal from '@/components/ConfirmModal';
import { TO_EMPLOYEES } from '@/configs';
import {
  Button,
  Stack,
  Image,
  Group,
  Divider,
  Text,
  Box,
  Skeleton,
} from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import { useState } from 'react';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { FaBirthdayCake, FaMoneyBillWaveAlt, FaUserAlt } from 'react-icons/fa';
import { MdEmail, MdWork } from 'react-icons/md';
import DetailHeader from './components/Header/Header';

import styles from './styles.module.scss';

export default function DetailEmployee() {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, modalOpenToggle] = useToggle(false, [true, false]);
  const handleModalClick = () => {
    modalOpenToggle();
  };

  return (
    <>
      <ConfirmModal
        message="Do you want to remove the Employee?"
        opened={isModalOpen}
        onClose={handleModalClick}
        onOkClick={() => {}}
        size="xs"
        centered
      />

      <DetailHeader linkPrePage={`${TO_EMPLOYEES}`}>
        <Box
          sx={(theme) => ({
            display: 'block',
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            color:
              theme.colorScheme === 'dark'
                ? theme.colors.blue[4]
                : theme.colors.blue[7],
            textAlign: 'center',
            borderRadius: theme.radius.md,
          })}
        >
          <div className={styles.boxHeader}></div>
          <div className={styles.boxBody}>
            <div className={styles.function}>
              <div className={styles.imageContainer}>
                <Skeleton
                  width={230}
                  height={220}
                  visible={loading}
                  radius="sm"
                >
                  <Image
                    width={230}
                    height={220}
                    src={
                      'https://i.pinimg.com/280x280_RS/56/2a/00/562a005b38ca84265cbc0a1ebab430d8.jpg'
                    }
                    className={styles.avatar}
                    placeholder
                    radius="sm"
                  />
                </Skeleton>
                <Skeleton width={230} visible={loading}>
                  <Text weight={700} size="lg">
                    Nguyen van A
                  </Text>
                </Skeleton>
              </div>
              <Button
                color="red"
                variant="outline"
                styles={(theme) => ({
                  root: {
                    margin: '10px',
                    width: '230px',
                    '&:hover': {
                      color: 'white',
                      backgroundColor: 'red',
                    },
                  },

                  leftIcon: {
                    marginRight: 15,
                  },
                })}
                className={styles.deleteButton}
                loading={loading}
              >
                Delete
              </Button>
            </div>

            <div className={styles.information}>
              <Box
                sx={(theme) => ({
                  display: 'block',
                  padding: '10px',
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[5]
                      : theme.colors.gray[0],
                  border: '1px solid',
                  color:
                    theme.colorScheme === 'dark'
                      ? theme.colors.blue[4]
                      : theme.colors.blue[7],
                  textAlign: 'center',
                  borderRadius: theme.radius.md,
                })}
              >
                <Group className={styles.line}>
                  <AiOutlineFieldNumber size={30} />
                  <Skeleton width={230} visible={loading}>
                    <Text weight={700} size="lg">
                      #3311
                    </Text>
                  </Skeleton>
                </Group>

                <Group className={styles.line}>
                  <FaUserAlt size={30} />
                  <Skeleton width={230} visible={loading}>
                    <Text weight={500} size="lg">
                      Nguyen van A
                    </Text>
                  </Skeleton>
                </Group>

                <Group className={styles.line}>
                  <FaBirthdayCake size={30} />
                  <Skeleton width={230} visible={loading}>
                    <Text weight={500} size="lg">
                      22/3/2002
                    </Text>
                  </Skeleton>
                </Group>
                <Group className={styles.line}>
                  <MdEmail size={30} />
                  <Skeleton width={230} visible={loading}>
                    <Text weight={500} size="lg">
                      NguyenvanA@gmail.com
                    </Text>
                  </Skeleton>
                </Group>

                <Group className={styles.line}>
                  <MdWork size={30} />
                  <Skeleton width={230} visible={loading}>
                    <Text weight={500} size="lg">
                      Employee
                    </Text>
                  </Skeleton>
                </Group>
                <Group className={styles.line}>
                  <FaMoneyBillWaveAlt size={30} />
                  <Text color="green" size="lg" weight={500}>
                    <Skeleton width={230} visible={loading}>
                      30000 $
                    </Skeleton>
                  </Text>
                </Group>
              </Box>
            </div>
          </div>
        </Box>
      </DetailHeader>
    </>
  );
}
