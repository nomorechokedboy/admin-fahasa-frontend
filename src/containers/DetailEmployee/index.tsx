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
          <Stack className={styles.box}>
            <div className={styles.boxHeader}></div>
            <div className={styles.boxBody}>
              <div className={styles.function}>
                <div className={styles.imageContainer}>
                  <Skeleton
                    width={200}
                    height={190}
                    visible={loading}
                    radius="sm"
                  >
                    <Image
                      width={200}
                      height={190}
                      src={
                        'https://i.pinimg.com/280x280_RS/56/2a/00/562a005b38ca84265cbc0a1ebab430d8.jpg'
                      }
                      className={styles.avatar}
                      placeholder
                      radius="sm"
                    />
                  </Skeleton>
                  <Skeleton width={200} visible={loading}>
                    <Text size="xl" classNames={styles.title} weight={500}>
                      Nguyen van A
                    </Text>
                  </Skeleton>
                </div>

                <Button
                  loading={loading}
                  color="red"
                  variant="outline"
                  size="md"
                  className={styles.buttonDelete}
                  onClick={handleModalClick}
                  sx={(theme) => ({
                    '&:hover': {
                      backgroundColor: theme.colors.red,
                      color: theme.colors.gray[1],
                    },
                  })}
                >
                  Delete
                </Button>
              </div>
              <Divider className={styles.divider} size="xs" />
              <Stack className={styles.information}>
                <Group>
                  <AiOutlineFieldNumber size={25} />
                  <Skeleton width={150} visible={loading}>
                    <Text weight={700}>#3311</Text>
                  </Skeleton>
                </Group>
                <Group>
                  <FaUserAlt size={25} />
                  <Skeleton width={150} visible={loading}>
                    <Text weight={500}>Nguyen van A</Text>
                  </Skeleton>
                </Group>
                <Group>
                  <FaBirthdayCake size={25} />
                  <Skeleton width={150} visible={loading}>
                    <Text weight={500}>22/3/2002</Text>
                  </Skeleton>
                </Group>
                <Group>
                  <MdEmail size={25} />
                  <Skeleton width={150} visible={loading}>
                    <Text weight={500}>NguyenvanA@gmail.com</Text>
                  </Skeleton>
                </Group>
                <Group>
                  <MdWork size={25} />
                  <Skeleton width={150} visible={loading}>
                    <Text weight={500}>Employee</Text>
                  </Skeleton>
                </Group>
                <Group>
                  <FaMoneyBillWaveAlt size={25} />
                  <Text color="green" weight={500}>
                    <Skeleton width={150} visible={loading}>
                      30000 $
                    </Skeleton>
                  </Text>
                </Group>
              </Stack>
            </div>
          </Stack>
        </Box>
      </DetailHeader>
    </>
  );
}
