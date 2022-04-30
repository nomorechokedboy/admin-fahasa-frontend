import { Box, ChevronIcon, Pagination, Select, TextInput } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import Employee from '../Employee';
import styles from './styles.module.scss';
import IEmployee from '@/types/employee';

interface EmployeesProps {
  listEmployees: Array<IEmployee>;
  isValidating: boolean;
  pageNumber: number;
}
export default function Employees({
  listEmployees,
  isValidating,
  pageNumber,
}: EmployeesProps) {
  const [employeeList, setEmployeeList] = useState(listEmployees);
  const [activePage, setPage] = useState(1);
  const [gender, setGender] = useState<string | null>('all');
  const [arrange, setArrange] = useState<string | null>('all');
  const typingTimeOut = useRef<any>(null);
  const ascending = (a: string, b: string) => a.localeCompare(b);
  const descending = (a: string, b: string) => b.localeCompare(a);
  const handleChangeSearch = (event: any) => {
    if (typingTimeOut.current) {
      clearTimeout(typingTimeOut.current);
    }
    typingTimeOut.current = setTimeout(() => {
      let search = event.target.value;
      let filter = listEmployees.filter((value: IEmployee) => {
        if (search === '') {
          return value;
        } else {
          return value.name.toLowerCase().includes(search.toLowerCase().trim());
        }
      });
      setEmployeeList(filter);
    }, 600);
  };
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
            onChange={setArrange}
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
            onChange={setGender}
            value={gender}
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
          {employeeList
            .filter((value) =>
              gender === 'all' ? -1 : value.gender === gender,
            )
            .sort((a, b) =>
              arrange === 'all'
                ? 0
                : arrange === 'descending'
                ? descending(a.id.toLowerCase(), b.id.toLocaleLowerCase())
                : ascending(a.id.toLowerCase(), b.id.toLocaleLowerCase()),
            )
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
