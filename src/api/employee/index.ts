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

export const getEmployee = async (url: string, id: string) => {
  await delay(3000);
  const res = {
    status: 200,
    error: '',
    data: fakeData.find((data) => data.id === id),
  };
  return res.data;
};

export const updateEmployee = async (employee: Employee) => {
  await delay(1000);
  const res = {
    status: 200,
    error: '',
    data: fakeData.map((emp) =>
      emp.id === employee.id ? { ...emp, ...employee } : emp,
    ),
  };

  return res.data;
};

export const deleteEmployee = async (id: string) => {
  const res = {
    status: 200,
    error: 'loi roi',
    data: fakeData.filter((data) => data.id !== id),
  };
  if (res.status === 500) {
    throw new Error(res.error);
  }
  return res.data;
};
