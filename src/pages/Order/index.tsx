import { DETAIL } from '@/configs';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const ErrorPage = lazy(() => import('@/pages/Error'));
import Order from '@/containers/Order';
import Detail from '../../containers/Detail';

export default function OrderPage() {
  return (
    <Routes>
      <Route index element={<Order />} />
      <Route path={DETAIL} element={<Detail />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
