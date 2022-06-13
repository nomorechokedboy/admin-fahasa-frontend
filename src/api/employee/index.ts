import axiosClient from '@/lib/axiosClient';
import Employee from '@/types/employee';
import fakeData from './mockData';

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function getAllEmployee(url: string) {
  const res = await axiosClient.get(url);
  return res.data;
}

export const createEmployee = (url: string, newEmployee: Partial<any>) =>
  axiosClient.post(url, newEmployee).then((res) => res.data);

export const getEmployee = async (url: string, id: string) => {
  const res = await axiosClient.get(url + '/' + id);
  return res.data;
};

export const updateEmployee = async (employee: Employee) => {
  await delay(1000);
  const res = {
    status: 200,
    error: '',
    data: fakeData.map((emp) =>
      emp._id === employee._id ? { ...emp, ...employee } : emp,
    ),
  };

  return res.data;
};

export const deleteEmployee = async (url: string, id: string) => {
  const res = await axiosClient
    .delete(url + '/' + id)
    .catch((e) => console.log(e));
  return res;
};
