import Review from '@/types/review';
import { delay } from '../employee';
import fakeDataReview from './mockData';

export async function getAllReviews(url: string) {
  await delay(3000);
  const res = {
    status: 200,
    error: 'loi roi',
    data: fakeDataReview,
  };
  if (res.status === 500) {
    throw new Error(res.error);
  }
  return res.data;
}
