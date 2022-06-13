import ReviewList from '@/containers/ReviewsList';
import { Route, Routes } from 'react-router';
import ErrorPage from '../Error';

interface ReviewPageProps {}

export default function ReviewPage() {
  return (
    <Routes>
      <Route index element={<ReviewList />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
