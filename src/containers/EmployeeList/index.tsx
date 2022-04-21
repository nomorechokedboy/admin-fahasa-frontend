import { TO_EMPLOYEES } from '@/configs';
import ListPageLayout from '@/layout/SubPageLayout';
import { ChevronIcon, Pagination, Select, TextInput } from '@mantine/core';
import { useState } from 'react';
import data from './data';
import styles from './styles.module.scss';

import Employee from './Employee';

interface EmployeeListProps {}

export default function EmployeeList() {
  const [loading, setLoading] = useState(true);
  const [activePage, setPage] = useState(1);
  const handleDetailClick = () => {
    console.log('Click');
  };
  return (
    <ListPageLayout rootDir={TO_EMPLOYEES} title="Employees List">
      <div className={styles.mainBox}>
        <header className={styles.boxHeader}>
          <div className={styles.containerBoxHeader}>
            <TextInput
              placeholder="Search"
              className={styles.searchBox}
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
            {data.slice(0, 5).map((people) => (
              <Employee
                key={people.id}
                {...people}
                loading={loading}
                handleOnClick={handleDetailClick}
              />
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
