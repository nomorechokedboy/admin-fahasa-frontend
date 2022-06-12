import { DETAIL } from '@/configs';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const ErrorPage = lazy(() => import('@/pages/Error'));
import Order from '@/containers/Order';
import OrderDetail from '../../containers/OrderDetail';

export default function OrderPage() {
  return (
    <Routes>
      <Route index element={<Order />} />
      <Route path={DETAIL} element={<OrderDetail />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
