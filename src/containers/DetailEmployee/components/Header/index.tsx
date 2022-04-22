import { Stack, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

type HeaderDetailPros = {
  linkPrePage: string;
  children: ReactNode;
};

export default function DetailHeader({
  children,
  linkPrePage,
}: HeaderDetailPros) {
  return (
    <Stack className={styles.container}>
      <div className={styles.contentheader}>
        <Link to={linkPrePage}>
          <Button
            leftIcon={<HiOutlineArrowSmLeft />}
            color="gray"
            size="sm"
            variant="outline"
          >
            Go back
          </Button>
        </Link>
      </div>
      {children}
    </Stack>
  );
}
