import { CREATE, DETAIL } from '@/configs';
import ProductDetail from '@/containers/ProductDetail';
import ProductList from '@/containers/ProductList';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const ErrorPage = lazy(() => import('@/pages/Error'));
const AddForm = lazy(() => import('@/containers/AddForm'));

export default function ProductPage() {
  return (
    <Routes>
      <Route index element={<ProductList />} />
      <Route path={`${DETAIL}/:id`} element={<ProductDetail />} />
      <Route path={CREATE} element={<AddForm />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
