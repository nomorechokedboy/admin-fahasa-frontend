import Employee from '@/types/employee';
import { data } from 'cypress/types/jquery';
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

export const getEmployee = async (url: string, id: string) => {
  await delay(3000);
  const res = {
    status: 200,
    error: '',
    data: fakeData.find((data) => data.id === id),
  };
  return res.data;
};

export const updateEmployee = (employee: Employee) => {
  const res = {
    status: 200,
    error: '',
    data: fakeData.map((emp) =>
      emp.id === employee.id ? { ...emp, ...employee } : employee,
    ),
  };
  return res.data;
};

export const deleteEmployee = (id: string) => {
  const res = {
    status: 500,
    error: '',
    data: fakeData.filter((data) => data.id !== id),
  };
  return res.data;
};
