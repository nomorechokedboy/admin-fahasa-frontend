import axiosClient from '@/lib/axiosClient';

export async function getAllUserType(url: string) {
  const res = await axiosClient.get(url);
  return res.data;
}
