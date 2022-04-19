import { EMPLOYEES, ORDERS, PRODUCTS, REVIEWS } from '@/configs';
import Dashboard from '@/containers/Dashboard';
import { lazy, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import EmployeePage from '../Employee';
import OrderPage from '../Order';
import ReviewPage from '../Review';
const ProductPage = lazy(() => import('../Product'));
const ErrorPage = lazy(() => import('@/pages/Error'));

const AdminPage = memo(() => {
  console.log('AdminPage render');

  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path={PRODUCTS} element={<ProductPage />} />
      <Route path={ORDERS} element={<OrderPage />} />
      <Route path={EMPLOYEES} element={<EmployeePage />} />
      <Route path={REVIEWS} element={<ReviewPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
});

export default AdminPage;
