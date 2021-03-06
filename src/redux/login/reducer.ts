import { findUserById, isSignedIn } from '@/lib/firebase';
import BaseUser from '@/types/user';
import { Action } from '../types';
import {
  CALCEL_LOGIN_LOADING,
  LoginState,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from './types';

const authUser = await isSignedIn();
let user: BaseUser | null = {
  displayName: '',
  photoURL: '',
  role: '',
};

if (authUser) {
  const snapshot = await findUserById(authUser.uid).once('value');
  const found = snapshot.val();
  if (user) {
    user.displayName = `${found.firstName} ${found.lastName}`;
    user.role = found.role;
    user.photoURL = found.photoURL;
  }
} else {
  user = null;
}

const initialState: LoginState = {
  user,
  loading: false,
};

export default function LoginReducer(
  state = initialState,
  action: Action<LoginState>,
): LoginState {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        loading: payload.loading,
      };
    case CALCEL_LOGIN_LOADING:
      return {
        ...state,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
