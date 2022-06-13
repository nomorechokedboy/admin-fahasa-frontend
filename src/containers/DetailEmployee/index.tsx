import { deleteEmployee, getEmployee } from '@/api';
import ConfirmModal from '@/components/ConfirmModal';
import CTA from '@/components/CTA';
import { TO_EMPLOYEES } from '@/configs';
import { Button, Image, Group, Text, Skeleton, Paper } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import * as FiIcons from 'react-icons/fi';
import { AiOutlineFieldNumber, AiFillHome } from 'react-icons/ai';
import { FaBirthdayCake, FaMoneyBillWaveAlt, FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { useParams, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import DetailHeader from './components/Header';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setError } from '@/redux';
export default function DetailEmployee() {
  const [isModalOpen, modalOpenToggle] = useToggle(false, [true, false]);
  let { id } = useParams();
  console.log(id);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, error } = useSWR(['/user', id!], getEmployee, {
    shouldRetryOnError: false,
  });
  const [loading, setLoading] = useState(true);
  console.log(data);
  useEffect(() => {
    if (!error && !data) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [data]);

  const handleModalClick = () => {
    modalOpenToggle();
  };
  const handleOkClick = () => {
    deleteEmployee('/user', id!)
      .then((data) => {
        console.log(data);
        navigate('../', { replace: true });
      })
      .catch((error) => {
        console.log(error);
        modalOpenToggle(!isModalOpen);
        dispatch(setError(error?.message));
      });
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
                      {data?.fullName}
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
                      <Text className={styles.text}>{data?.uid}</Text>
                    </Skeleton>
                  </Group>

                  <Group className={styles.line}>
                    <FaUserAlt size={30} />
                    <Skeleton width={230} visible={loading}>
                      <Text className={styles.text}>{data?.fullName}</Text>
                    </Skeleton>
                  </Group>

                  <Group className={styles.line}>
                    <FaBirthdayCake size={30} />
                    <Skeleton width={230} visible={loading}>
                      <Text className={styles.text}>{data?.birthdate}</Text>
                    </Skeleton>
                  </Group>
                  <Group className={styles.line}>
                    <MdEmail size={30} />
                    <Skeleton width={230} visible={loading}>
                      <Text className={styles.text}>{data?.email}</Text>
                    </Skeleton>
                  </Group>

                  <Group className={styles.line}>
                    <AiFillHome size={30} />
                    <Skeleton width={230} visible={loading}>
                      <Text className={styles.text}>{data?.uid}</Text>
                    </Skeleton>
                  </Group>

                  <Group className={styles.line}>
                    <BsFillTelephoneFill size={30} />
                    <Skeleton width={230} visible={loading}>
                      <Text className={styles.text}>{data?.phoneNumber}</Text>
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
