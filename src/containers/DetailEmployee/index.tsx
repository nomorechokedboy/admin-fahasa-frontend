import { TO_EMPLOYEES } from '@/configs';
import { Button, Stack, Image, Group, Divider, Text } from '@mantine/core';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { FaBirthdayCake, FaMoneyBillWaveAlt, FaUserAlt } from 'react-icons/fa';
import { MdEmail, MdWork } from 'react-icons/md';
import DetailHeader from './components/Header';
import styles from './styles.module.scss';

export default function DetailEmployee() {
  return (
    <DetailHeader linkPrePage={`${TO_EMPLOYEES}`}>
      <Stack className={styles.box}>
        <div className={styles.boxHeader}></div>
        <div className={styles.boxBody}>
          <div className={styles.function}>
            <div className={styles.imageContainer}>
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
              <Text size="xl" classNames={styles.title} weight={500}>
                Nguyen van A
              </Text>
            </div>
            <Button
              color="red"
              variant="outline"
              className={styles.buttonDelete}
            >
              Delete
            </Button>
          </div>
          <Divider className={styles.divider} size="xs" />
          <Stack className={styles.information}>
            <Group>
              <AiOutlineFieldNumber size={25} />
              <Text weight={700}>#3311</Text>
            </Group>
            <Group>
              <FaUserAlt size={25} />
              <Text weight={500}>Nguyen van A</Text>
            </Group>
            <Group>
              <FaBirthdayCake size={25} />
              <Text weight={500}>22/3/2002</Text>
            </Group>
            <Group>
              <MdEmail size={25} />
              <Text weight={500}>NguyenvanA@gmail.com</Text>
            </Group>
            <Group>
              <MdWork size={25} />
              <Text weight={500}>Employee</Text>
            </Group>
            <Group>
              <FaMoneyBillWaveAlt size={25} />
              <Text color="green" weight={500}>
                30000 $
              </Text>
            </Group>
          </Stack>
        </div>
      </Stack>
    </DetailHeader>
  );
}
