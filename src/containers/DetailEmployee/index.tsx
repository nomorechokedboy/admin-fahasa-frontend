import { deleteEmployee, getEmployee } from '@/api';
import ConfirmModal from '@/components/ConfirmModal';
import CTA from '@/components/CTA';
import { TO_EMPLOYEES } from '@/configs';
import { Button, Image, Group, Text, Skeleton, Paper } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { FaBirthdayCake, FaMoneyBillWaveAlt, FaUserAlt } from 'react-icons/fa';
import * as IamIcons from 'react-icons/im';
import { MdEmail, MdWork } from 'react-icons/md';
import { useParams, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import DetailHeader from './components/Header';
import styles from './styles.module.scss';
import Inform from './components/Inform';

export default function DetailEmployee() {
  const [isModalOpen, modalOpenToggle] = useToggle(false, [true, false]);
  const [isInformOpen, setInform] = useToggle(false, [true, false]);
  let { id } = useParams();
  let navigate = useNavigate();
  let loading = true;
  const { data, error } = useSWR(['/employee', id!], getEmployee, {
    shouldRetryOnError: false,
  });
  if (data) {
    loading = false;
  }

  const handleModalClick = () => {
    modalOpenToggle();
  };
  const handleOkClick = () => {
    if (deleteEmployee(id!).status === 200) {
      console.log('deleted');
      navigate('../', { replace: true });
    } else {
      console.log('deleted failed');
      setInform(!isInformOpen);
    }
  };
  const handleReloadClick = () => {};

  return (
    <>
      <ConfirmModal
        message="Do you want to remove the Employee?"
        opened={isModalOpen}
        onClose={handleModalClick}
        onOkClick={handleOkClick}
        size="xs"
        centered
      />
      <Inform
        icon={<IamIcons.ImSad2 />}
        message="Something wrong happended"
        opened={isInformOpen}
        onClose={() => setInform(!isInformOpen)}
      />

      <DetailHeader linkPrePage={`${TO_EMPLOYEES}`}>
        {error ? (
          <CTA
            icon={<FiIcons.FiMeh />}
            message={error.message}
            label="Reload the page"
            onClick={handleReloadClick}
          />
        ) : (
          <Paper className={styles.container} shadow="xl" withBorder>
            <div className={styles.boxHeader}></div>
            <div className={styles.boxBody}>
              <div className={styles.function}>
                <div className={styles.imageContainer}>
                  <Skeleton className={styles.avatar} visible={loading}>
                    <Image
                      src={data?.image}
                      className={styles.avatar}
                      placeholder
                    />
                  </Skeleton>
                  <Skeleton width={230} visible={loading}>
                    <Text weight={700} size="lg">
                      {data?.name}
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
                      <Text className={styles.text}>{data?.id}</Text>
                    </Skeleton>
                  </Group>

                  <Group className={styles.line}>
                    <FaUserAlt size={30} />
                    <Skeleton width={230} visible={loading}>
                      <Text className={styles.text}>{data?.name}</Text>
                    </Skeleton>
                  </Group>

                  <Group className={styles.line}>
                    <FaBirthdayCake size={30} />
                    <Skeleton width={230} visible={loading}>
                      <Text className={styles.text}>{data?.birthday}</Text>
                    </Skeleton>
                  </Group>
                  <Group className={styles.line}>
                    <MdEmail size={30} />
                    <Skeleton width={230} visible={loading}>
                      <Text className={styles.text}>{data?.email}</Text>
                    </Skeleton>
                  </Group>

                  <Group className={styles.line}>
                    <MdWork size={30} />
                    <Skeleton width={230} visible={loading}>
                      <Text className={styles.text}>{data?.role}</Text>
                    </Skeleton>
                  </Group>
                  <Group className={styles.line}>
                    <FaMoneyBillWaveAlt size={30} />
                    <Skeleton width={230} visible={loading}>
                      <Text color="green" className={styles.text}>
                        {data?.salary} $
                      </Text>
                    </Skeleton>
                  </Group>
                </Paper>
              </div>
            </div>
          </Paper>
        )}
      </DetailHeader>
    </>
  );
}
