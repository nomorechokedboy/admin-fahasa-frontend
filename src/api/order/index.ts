import axiosClient from '@/lib/axiosClient';

export async function getAllOrder(url: string) {
  const res = await axiosClient.get(url);
  return res.data;
}

export async function getOrderById(url: string, id: string) {
  const res = await axiosClient.get(`${url}/_${id}`);
  return res.data;
}
