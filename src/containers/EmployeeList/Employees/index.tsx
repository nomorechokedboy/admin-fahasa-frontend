import { Box, ChevronIcon, Pagination, Select, TextInput } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import Employee from '../Employee';
import styles from './styles.module.scss';
import IEmployee from '@/types/employee';

interface employeesProps {
  listEmployees: Array<IEmployee>;
  isValidating: boolean;
  pageNumber: number;
}
export default function Employees({
  listEmployees,
  isValidating,
  pageNumber,
}: employeesProps) {
  const [employeeList, setEmployeeList] = useState(listEmployees);
  const [activePage, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState('all');
  const [arrange, setArrange] = useState('all');

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
    let filter = listEmployees.filter((value: IEmployee) => {
      if (search === '') {
        return value;
      } else {
        return value.name.toLowerCase().includes(search.toLowerCase().trim());
      }
    });
    setEmployeeList(filter);
  }, [search]);
  console.log((activePage - 1) * 8);

  return (
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
              { value: '', label: 'All' },
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
              { value: '', label: 'All' },
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
            ]}
          />
        </div>
      </header>

      <div className={styles.boxBodyContainer}>
        <div className={styles.boxBody}>
          {employeeList
            .slice((activePage - 1) * 8, activePage * 8)
            .map((employee: any, index) => (
              <Employee key={index} {...employee} loading={isValidating} />
            ))}
        </div>
      </div>

      <div className={styles.boxFooter}>
        <Pagination total={pageNumber} page={activePage} onChange={setPage} />
      </div>
    </Box>
  );
}
