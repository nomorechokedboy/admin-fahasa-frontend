import Product from '@/types/product';
import axiosClient from '../../lib/axiosClient';

export async function getAllProduct(url: string) {
  const res = await axiosClient.get(url);

  return res.data;
}

export const getProduct = (url: string) =>
  axiosClient.get(url).then((res) => res.data);

export const createProduct = (newProduct: Partial<Product>, db: string) =>
  axiosClient.post(`/product?db=${db}`, newProduct).then((res) => res.data);

export const updateProduct = (
  id: string,
  updateProduct: Partial<Product>,
  db: string,
) =>
  axiosClient
    .put(`/product/${id}?db=${db}`, updateProduct)
    .then((res) => res.data);

export const deleteProduct = (id: string, db: string) =>
  axiosClient.delete(`/product/${id}?db=${db}`).then((res) => res.data);
