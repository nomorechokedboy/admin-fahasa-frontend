import { TO_EMPLOYEES } from '@/configs';
import ListPageLayout from '@/layout/SubPageLayout';
import { Box, ChevronIcon, Pagination, Select, TextInput } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import IEmployee from '@/types/employee';
import Employee from './Employee';
import useSWR from 'swr';
import { getAllEmployee } from '@/api/employee';
import fakedata from './data';
interface EmployeeListProps {}

export default function EmployeeList() {
  // const { data, error, isValidating, mutate } = useSWR(
  //   '/employee',
  //   getAllEmployee,
  //   {
  //     shouldRetryOnError: false,
  //   },
  // );

  const [employeeList, setEmployeeList] = useState(fakedata); /// fix to array when try real api
  const [activePage, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const typingTimeOut = useRef<any>(null);

  const handleChangeSearch = (event: any) => {
    if (typingTimeOut.current) {
      clearTimeout(typingTimeOut.current);
    }
    typingTimeOut.current = setTimeout(() => {
      setSearch(event.target.value);
    }, 600);
  };
  useEffect(() => {
    let filter = fakedata.filter((value) => {
      if (search === '') {
        return value;
      } else {
        return value.name.toLowerCase().includes(search.toLowerCase().trim());
      }
    });
    setEmployeeList(filter);
  }, [search]);

  const [loading, setLoading] = useState(false);

  return (
    <ListPageLayout rootDir={TO_EMPLOYEES} title="Employees List">
      <Box
        sx={(theme) => ({
          display: 'block',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[4]
              : theme.colors.gray[1],
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.blue[4]
              : theme.colors.blue[7],
          textAlign: 'center',
          borderRadius: theme.radius.md,
        })}
        className={styles.mainBox}
      >
        <header className={styles.boxHeader}>
          <div className={styles.containerBoxHeader}>
            <TextInput
              ref={typingTimeOut}
              placeholder="Search"
              className={styles.searchBox}
              onChange={handleChangeSearch}
            ></TextInput>
            <Select
              rightSection={<ChevronIcon />}
              rightSectionWidth={30}
              styles={{ rightSection: { pointerEvents: 'none' } }}
              placeholder="All"
              className={styles.selectionBox}
              data={[
                { value: 'all', label: 'All' },
                { value: 'ascending', label: 'Ascending' },
                { value: 'descending', label: 'Descending' },
              ]}
            />
            <Select
              placeholder="Gender:All"
              rightSection={<ChevronIcon />}
              rightSectionWidth={30}
              styles={{ rightSection: { pointerEvents: 'none' } }}
              className={styles.selectionBox}
              data={[
                { value: 'all', label: 'All' },
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
              ]}
            />
          </div>
        </header>

        <div className={styles.boxBodyContainer}>
          <div className={styles.boxBody}>
            {employeeList.map((employee: any, index) => (
              <Employee key={index} {...employee} loading={loading} />
            ))}
          </div>
        </div>

        <div className={styles.boxFooter}>
          <Pagination total={10} page={activePage} onChange={setPage} />
        </div>
      </Box>
    </ListPageLayout>
  );
}
