import { CREATE } from '@/configs';
import { getDatabaseState, setDatabase } from '@/redux/database';
import { Button, Select, Stack } from '@mantine/core';
import { ReactNode } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface ListPageLayoutProps {
  children: ReactNode;
  title: string;
  rootDir?: string;
}

export default function ListPageLayout({
  children,
  title,
  rootDir,
}: ListPageLayoutProps) {
  const db = useSelector(getDatabaseState);
  const dispatch = useDispatch();
  const handleSelectDatabase = (option: string | null) => {
    option && dispatch(setDatabase(option));
  };

  return (
    <Stack className={styles.container}>
      <div className={styles.contentHeader}>
        <h2>{title}</h2>
        <Select
          value={db}
          onChange={handleSelectDatabase}
          label="Your favorite database"
          placeholder="Pick one"
          data={[
            { value: 'default', label: 'In memory database' },
            { value: 'mySQL', label: 'MySQL' },
            { value: 'mongoDb', label: 'MongoDb' },
          ]}
        />
        <Link to={`${rootDir}/${CREATE}`}>
          <Button leftIcon={<HiOutlinePlus />} color="blue">
            Create new
          </Button>
        </Link>
      </div>
      {children}
    </Stack>
  );
}
