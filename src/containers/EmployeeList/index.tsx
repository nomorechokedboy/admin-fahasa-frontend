import { TO_EMPLOYEES } from '@/configs';
import ListPageLayout from '@/layout/SubPageLayout';
import { ChevronIcon, Pagination, Select, TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import IEmployee from '@/types/employee';
import Employee from './Employee';

interface EmployeeListProps {}

export default function EmployeeList() {
  const [employeeList, setEmployeeList] = useState([]);
  const [activePage, setPage] = useState(1);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetch('http://localhost:3000/employee')
      .then((res) => res.json())
      .then((employees) => {
        let employeelists = employees.filter((value: IEmployee) =>
          value.name.toLowerCase().includes(search.toLowerCase()),
        );
        setEmployeeList(employeelists);
      });
  }, [search]);

  const [loading, setLoading] = useState(false);
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <ListPageLayout rootDir={TO_EMPLOYEES} title="Employees List">
      <div className={styles.mainBox}>
        <header className={styles.boxHeader}>
          <div className={styles.containerBoxHeader}>
            <TextInput
              placeholder="Search"
              className={styles.searchBox}
              onChange={(event) => handleSearch(event)}
            ></TextInput>
            {/* change icon */}
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
            {employeeList.slice(0, 5).map((employee: any) => (
              <Employee key={employee.id} {...employee} loading={loading} />
            ))}
          </div>
        </div>

        <div className={styles.boxFooter}>
          <Pagination total={10} page={activePage} onChange={setPage} />
        </div>
      </div>
    </ListPageLayout>
  );
}
