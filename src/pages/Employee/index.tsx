import ProtectedRoute from '@/components/ProtectedPage';
import { CREATE, DETAIL, TO_EMPLOYEES } from '@/configs';
import AddEmployee from '@/containers/AddEmployee';
import DetailEmployee from '@/containers/DetailEmployee';
import EmployeeList from '@/containers/EmployeeList';
import { getLoginState } from '@/redux';
import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

const ErrorPage = lazy(() => import('@/pages/Error'));

interface EmployeePageProps {}

export default function EmployeePage() {
  console.log('EmployeePage render');
  const { user } = useSelector(getLoginState);

  return (
    <Routes>
      <Route index element={<EmployeeList />} />
      <Route path={DETAIL + '/:id'} element={<DetailEmployee />} />
      <Route
        path={CREATE}
        element={
          <ProtectedRoute
            isAllowed={!!user && user.role === 'employee'}
            redirectLink={TO_EMPLOYEES}
          >
            <AddEmployee />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
