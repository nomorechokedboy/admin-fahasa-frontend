import BaseUser from '@/types/user';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGOUT = 'LOGOUT';
export const CALCEL_LOGIN_LOADING = 'CALCEL_LOGIN_LOADING';
export interface LoginState {
  loading: boolean;
  user: BaseUser | null;
}
