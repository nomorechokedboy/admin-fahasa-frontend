import axiosClient from '@/lib/axiosClient';
import { FireStore } from '../..';

export const findAllUser = () => FireStore.ref('users');
export const findUserById = (id: string) => FireStore.ref(`users/${id}`);

export function findUserByUid(id: string) {
  const res = axiosClient.get(`/user/${id}`);
  return res;
}
