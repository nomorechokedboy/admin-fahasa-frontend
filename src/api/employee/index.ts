import Employee from '@/types/employee';
import fakeData from './mockData';

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function getAllEmployee(url: string) {
  await delay(3000);
  const res = {
    status: 200,
    error: '',
    data: fakeData,
  };
  return res.data;
}

export const getEmployee = (url: string, id: string) => {};

export const updateEmployee = (employee: Employee) => {};

export const deleteEmployee = (id: string) => {};
