import axiosClient from '@/lib/axiosClient';

export const getAllSupplier = (url: string) =>
  axiosClient.get(url).then((res) => res.data);

export const createSupplier = (supplierName: string) =>
  axiosClient.post('/supplier', { name: supplierName }).then((res) => res.data);
