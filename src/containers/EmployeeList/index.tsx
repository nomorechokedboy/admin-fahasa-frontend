import { getAllEmployee } from '@/api/employee';
import { TO_EMPLOYEES } from '@/configs';
import ListPageLayout from '@/layout/SubPageLayout';
import { useEffect } from 'react';
import useSWR from 'swr';
import Employees from './Employees';
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import CTA from '@/components/CTA';
import { setError } from '@/redux';
import { useDispatch } from 'react-redux';

export default function EmployeeList() {
  const { data, error, isValidating, mutate } = useSWR(
    '/employee',
    getAllEmployee,
    {
      shouldRetryOnError: false,
    },
  );
  const handleReloadClick = () => {
    mutate();
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setError(error?.message));
  }, [dispatch, error]);

  return (
    <ListPageLayout rootDir={TO_EMPLOYEES} title="Employees List">
      {error ? (
        <CTA
          icon={<FiIcons.FiMeh />}
          message={error.message}
          label="Reload the page"
          onClick={handleReloadClick}
        />
      ) : !error && !data ? (
        <Employees listEmployees={[...Array(8)]} isValidating={true} />
      ) : !data?.length ? (
        <CTA
          icon={<BsIcons.BsFillPersonXFill />}
          message="There is no current employees, please add new Employee!"
        />
      ) : (
        <Employees listEmployees={data} isValidating={isValidating} />
      )}
    </ListPageLayout>
  );
}
