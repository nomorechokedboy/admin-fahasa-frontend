import Employee from '@/types/employee';
import axiosClient from '@/lib/axiosClient';

export async function getAllEmployee(url: string) {
  const res = await axiosClient.get(url);
  return res.data;
}
