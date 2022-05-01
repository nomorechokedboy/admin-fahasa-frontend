import { getAllEmployee } from '@/api/employee';
import { TO_EMPLOYEES } from '@/configs';
import ListPageLayout from '@/layout/SubPageLayout';
import { ReactNode } from 'react';
import useSWR from 'swr';
import Employees from './Employees';

export default function EmployeeList() {
  const { data, error, isValidating, mutate } = useSWR(
    '/employee',
    getAllEmployee,
  );

  let List: ReactNode;

  if (data) {
    const pageNumber = Math.ceil(data.length / 8);

    List = (
      <Employees
        listEmployees={data}
        isValidating={false}
        pageNumber={pageNumber}
      />
    );
  }

  return (
    <ListPageLayout rootDir={TO_EMPLOYEES} title="Employees List">
      {List}
    </ListPageLayout>
  );
}
