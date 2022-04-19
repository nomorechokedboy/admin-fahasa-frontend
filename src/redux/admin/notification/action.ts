import { Action, StateTree } from '@/redux/types';
import { CLOSE_NOTIFICATION } from '.';
import NotificationState, { SET_ERROR, SET_NOTIFICATION } from './types';

export const setNotification = (
  message: string,
): Action<NotificationState> => ({
  payload: {
    isError: false,
    message,
  },
  type: SET_NOTIFICATION,
});

export const setError = (message: string): Action<NotificationState> => ({
  payload: {
    isError: true,
    message,
  },
  type: SET_ERROR,
});

export const closeNotification = (): Action<NotificationState> => ({
  payload: {
    isError: false,
    message: '',
  },
  type: CLOSE_NOTIFICATION,
});

export const getNotificationState = (state: StateTree) => state.notification;
