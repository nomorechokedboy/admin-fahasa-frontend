import { TO_EMPLOYEES } from '@/configs';
import ListPageLayout from '@/layout/SubPageLayout';
import styles from './styles.module.scss';
import useSWR from 'swr';
import { getAllEmployee } from '@/api/employee';
import fakedata from './data';
import Employees from './Employees';

interface EmployeeListProps {}

export default function EmployeeList() {
  // const { data, error, isValidating, mutate } = useSWR(
  //   '/employee',
  //   getAllEmployee,
  //   {
  //     shouldRetryOnError: false,
  //   },
  // );
  const pageNumber = Math.ceil(fakedata.length / 8);

  return (
    <ListPageLayout rootDir={TO_EMPLOYEES} title="Employees List">
      <Employees
        listEmployees={fakedata}
        isValidating={false}
        pageNumber={pageNumber}
      ></Employees>
    </ListPageLayout>
  );
}
