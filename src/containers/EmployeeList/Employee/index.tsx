import { DETAIL, TO_EMPLOYEES } from '@/configs';
import { Button, Card, Skeleton } from '@mantine/core';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface EmployeeProps {
  loading: boolean;
  _id?: String;
  uid?: String;
  fullName?: String;
  role?: String;
  image?: string;
  salary?: number;
}

export default function Employee({
  loading,
  _id,
  uid,
  fullName,
  role,
  image,
}: EmployeeProps) {
  const handleDetailClick = () => {
    console.log('click');
  };
  return (
    <div className={styles.userBoxContainer}>
      <Card withBorder className={styles.card}>
        <div className={styles.imgContainer}>
          <Skeleton visible={loading} className={styles.skeletonImg}>
            <img className={styles.avataImg} src={image} />
          </Skeleton>
        </div>
        <div className={styles.userNameContainer}>
          <Skeleton visible={loading} className={styles.userNameSkeleton}>
            <h4 className={styles.userName}>{fullName}</h4>
          </Skeleton>
          <Skeleton visible={loading} className={styles.informationContainer}>
            <p className={styles.information}>id: {uid}</p>
            <p className={styles.information}>{role}</p>
          </Skeleton>
        </div>
        <div className={styles.ButtonEditContainer}>
          <Link to={`${TO_EMPLOYEES}/${DETAIL}/${uid}`}>
            <Button
              loading={loading}
              className={styles.buttonEdit}
              onClick={handleDetailClick}
            >
              Profile
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
