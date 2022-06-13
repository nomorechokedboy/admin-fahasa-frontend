import { Action as ReduxAction } from 'redux';
import NotificationState from '../admin/notification/types';
import { LoginState } from '../login/types';

export interface Action<T> extends ReduxAction<string> {
  payload: T;
}

export interface StateTree {
  disabled: boolean;
  login: LoginState;
  notification: NotificationState;
  sidebar: boolean;
}
