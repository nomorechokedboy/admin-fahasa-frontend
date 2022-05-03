import Product from '@/types/product';
import axiosClient from '../../lib/axiosClient';

export async function getAllProduct(url: string) {
  const res = await axiosClient.get(url);

  return res.data;
}

export const getProduct = (url: string) =>
  axiosClient.get(url).then((res) => res.data);

export const createProduct = (newProduct: Partial<Product>) =>
  axiosClient.post('/product', newProduct).then((res) => res.data);

export const updateProduct = (id: string, updateProduct: Partial<Product>) =>
  axiosClient.put(`/product/${id}`, updateProduct).then((res) => res.data);

export const deleteProduct = (id: string) =>
  axiosClient.delete(`/product/${id}`).then((res) => res.data);
