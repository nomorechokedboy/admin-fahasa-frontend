import axiosClient from '@/lib/axiosClient';
import { Publisher } from '@/types';

export const getAllPublisher = (url: string) =>
  axiosClient.get(url).then((res) => res.data);

export const createPublisher = (payload: Publisher) =>
  axiosClient.post('publisher', payload).then((res) => res.data);
