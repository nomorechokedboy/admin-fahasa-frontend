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

export async function deleteReview(url: string, id: string) {
  await delay(600);
  const res = {
    status: 200,
    error: 'loi roi',
    data: fakeDataReview.filter((data) => data.id != id),
  };
  if (res.status === 500) {
    throw new Error(res.error);
  }
  return res.data;
}
