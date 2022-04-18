import { Action, StateTree } from '@/redux/types';
import NotificationState, { SET_ERRORS, SET_NOTIFICATIONS } from './types';

export const setNotification = (
  message: string,
): Action<NotificationState> => ({
  payload: {
    isError: false,
    message,
  },
  type: SET_NOTIFICATIONS,
});

export const setError = (message: string): Action<NotificationState> => ({
  payload: {
    isError: true,
    message,
  },
  type: SET_ERRORS,
});

export const getNotificationState = (state: StateTree) => state.notification;
