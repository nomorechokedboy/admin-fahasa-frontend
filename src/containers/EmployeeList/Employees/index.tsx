import {
  ChevronIcon,
  Pagination,
  Paper,
  Select,
  TextInput,
} from '@mantine/core';
import { ChangeEvent, useRef, useState } from 'react';
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
  const typingTimeOut = useRef<any>();
  const ascending = (a: string, b: string) => a.localeCompare(b);
  const descending = (a: string, b: string) => b.localeCompare(a);
  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
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
    <Paper shadow="xs" withBorder className={styles.mainBox}>
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
            placeholder="All"
            className={styles.selectionBox}
            onChange={setArrange}
            value={arrange}
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
                ? descending(a.name.toLowerCase(), b.name.toLocaleLowerCase())
                : ascending(a.name.toLowerCase(), b.name.toLocaleLowerCase()),
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
    </Paper>
  );
}
