import { Action } from '@/redux/types';
import { CLOSE_NOTIFICATION, SET_ERROR, SET_NOTIFICATION } from '.';
import NotificationState from './types';

const initialState: NotificationState = {
  isError: false,
  message: '',
};

export default function NotificationReducer(
  state = initialState,
  action: Action<NotificationState>,
) {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    case SET_NOTIFICATION:
      return action.payload;
    case CLOSE_NOTIFICATION:
      return action.payload;
    default:
      return state;
  }
}
