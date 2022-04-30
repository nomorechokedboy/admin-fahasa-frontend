import { DETAIL, TO_EMPLOYEES } from '@/configs';
import { Box, Button, Skeleton } from '@mantine/core';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface EmployeeProps {
  loading: boolean;
  id: string;
  name: string;
  role: string;
  image: string;
}

export default function Employee({
  loading,
  id,
  name,
  role,
  image,
}: EmployeeProps) {
  const handleDetailClick = () => {
    console.log('click');
  };
  return (
    <div className={styles.userBoxContainer}>
      <Box
        sx={(theme) => ({
          display: 'block',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[5]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.blue[4]
              : theme.colors.blue[7],
          textAlign: 'center',
          borderRadius: theme.radius.md,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[1],
          },
        })}
      >
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
            height="3rem"
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
          <Link to={`${TO_EMPLOYEES}/${DETAIL}`}>
            <Button
              loading={loading}
              className={styles.buttonEdit}
              onClick={handleDetailClick}
            >
              Profile
            </Button>
          </Link>
        </div>
      </Box>
    </div>
  );
}
