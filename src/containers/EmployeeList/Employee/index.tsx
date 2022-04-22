import { DETAIL, TO_EMPLOYEES } from '@/configs';
import { Button, Skeleton } from '@mantine/core';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

type EmployeePros = {
  loading: boolean;
  id: string;
  name: string;
  role: string;
  image: string;
};

export default function Employee({
  loading,
  id,
  name,
  role,
  image,
}: EmployeePros) {
  const handleDetailClick = () => {
    console.log('click');
  };
  return (
    <div className={styles.userBoxContainer}>
      <div className={styles.userBox}>
        <div className={styles.imgContainer}>
          <Skeleton
            visible={loading}
            height={112}
            circle
            mb="xl"
            className={styles.skeletonImg}
          >
            <img
              className={styles.avataImg}
              src={image}
              width="112"
              height="112"
            />
          </Skeleton>
        </div>
        <div className={styles.userNameContainer}>
          <Skeleton
            visible={loading}
            height="3.5rem"
            className={styles.userNameSkeleton}
          >
            <h4 className={styles.userName}>{name}</h4>
          </Skeleton>
          <Skeleton visible={loading} className={styles.informationContainer}>
            <p className={styles.information}>id: {id}</p>
            <p className={styles.information}>{role}</p>
          </Skeleton>
        </div>
        <div className={styles.ButtonEditContainer}>
          <Skeleton visible={loading}>
            <Link to={`${TO_EMPLOYEES}/${DETAIL}`}>
              <Button className={styles.buttonEdit} onClick={handleDetailClick}>
                Profile
              </Button>
            </Link>
          </Skeleton>
        </div>
      </div>
    </div>
  );
}
