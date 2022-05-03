import ConfirmModal from '@/components/ConfirmModal';
import { TO_EMPLOYEES } from '@/configs';
import { Button, Image, Group, Text, Skeleton, Paper } from '@mantine/core';
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
        <Paper className={styles.container} shadow="xl" withBorder>
          <div className={styles.boxHeader}></div>
          <div className={styles.boxBody}>
            <div className={styles.function}>
              <div className={styles.imageContainer}>
                <Skeleton className={styles.avatar} visible={loading}>
                  <Image
                    src={
                      'https://i.pinimg.com/280x280_RS/56/2a/00/562a005b38ca84265cbc0a1ebab430d8.jpg'
                    }
                    className={styles.avatar}
                    placeholder
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
                className={styles.deleteButton}
                loading={loading}
                onClick={handleModalClick}
              >
                Delete
              </Button>
            </div>

            <div className={styles.information}>
              <Paper className={styles.informationBox}>
                <Group className={styles.line}>
                  <AiOutlineFieldNumber size={30} />
                  <Skeleton width={230} visible={loading}>
                    <Text className={styles.text}>#3311</Text>
                  </Skeleton>
                </Group>

                <Group className={styles.line}>
                  <FaUserAlt size={30} />
                  <Skeleton width={230} visible={loading}>
                    <Text className={styles.text}>Nguyen van A</Text>
                  </Skeleton>
                </Group>

                <Group className={styles.line}>
                  <FaBirthdayCake size={30} />
                  <Skeleton width={230} visible={loading}>
                    <Text className={styles.text}>22/3/2002</Text>
                  </Skeleton>
                </Group>
                <Group className={styles.line}>
                  <MdEmail size={30} />
                  <Skeleton width={230} visible={loading}>
                    <Text className={styles.text}>NguyenvanA@gmail.com</Text>
                  </Skeleton>
                </Group>

                <Group className={styles.line}>
                  <MdWork size={30} />
                  <Skeleton width={230} visible={loading}>
                    <Text className={styles.text}>Employee</Text>
                  </Skeleton>
                </Group>
                <Group className={styles.line}>
                  <FaMoneyBillWaveAlt size={30} />
                  <Skeleton width={230} visible={loading}>
                    <Text color="green" className={styles.text}>
                      30000 $
                    </Text>
                  </Skeleton>
                </Group>
              </Paper>
            </div>
          </div>
        </Paper>
      </DetailHeader>
    </>
  );
}
