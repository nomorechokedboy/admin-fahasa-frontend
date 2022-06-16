import {
  auth,
  findUserById,
  findUserByUid,
  logIn,
  logOut,
} from '@/lib/firebase';
import BaseUser from '@/types/user';
import { ErrorCodeToMessage } from '@/utils/auth';
import { closeNotification, setError } from '..';
import { Action, StateTree } from '../types';
import {
  CALCEL_LOGIN_LOADING,
  LoginState,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from './types';

export default function login(email: string, password: string) {
  return (dispatch: any) => {
    dispatch(setLoading());
    logIn(email, password)
      .then(async (credential) => {
        const {
          user: { email, uid, photoURL },
        } = credential;
        const user: BaseUser = {
          displayName: email ? email : '',
          photoURL: photoURL ? photoURL : '',
          role: '',
          currentUser: '',
        };
        const snapshot = await findUserByUid(uid);
        const found = snapshot.data;
        user.displayName = found.fullName;
        user.role = found.types.name;
        user.photoURL = found.image;
        user.currentUser = auth;

        dispatch(closeNotification());
        dispatch(setLoginUser(user));
      })
      .catch((e: any) => {
        dispatch(setError(ErrorCodeToMessage(e.code)!));
        dispatch(cancelLoading());
      });
  };
}

export const logout = () => (dispatch: any) => {
  logOut()
    .then(() => {
      dispatch(setLogout());
    })
    .catch((e) => dispatch(setError(ErrorCodeToMessage(e.code)!)));
};

export const setLoading = (): Action<null> => ({
  payload: null,
  type: LOGIN_LOADING,
});

export const cancelLoading = (): Action<null> => ({
  payload: null,
  type: CALCEL_LOGIN_LOADING,
});

export const setLoginUser = (user: BaseUser): Action<LoginState> => ({
  type: LOGIN_SUCCESS,
  payload: {
    user,
    loading: false,
  },
});

export const setLogout = (): Action<null> => ({
  payload: null,
  type: LOGOUT,
});

export const getLoginState = (state: StateTree) => state.login;
