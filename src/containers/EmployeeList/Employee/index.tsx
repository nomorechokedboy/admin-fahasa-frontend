import { Button, Skeleton } from '@mantine/core';
import styles from './styles.module.scss';

type EmployeePros = {
  loading: boolean;
  id: string;
  name: string;
  role: string;
  image: string;
  handleOnClick: any;
};

export default function Employee({
  loading,
  id,
  name,
  role,
  image,
  handleOnClick,
}: EmployeePros) {
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
              src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c8c740569d1a4ca32d2.jpg"
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
            <Button className={styles.buttonEdit}>Profile</Button>
          </Skeleton>
        </div>
      </div>
    </div>
  );
}
