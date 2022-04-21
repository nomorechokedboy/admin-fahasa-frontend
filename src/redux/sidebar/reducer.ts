import { Action } from '@/redux/types';
import { SET_SIDEBAR_OPENED } from './types';

export default function SideBarReducer(state = true, action: Action<boolean>) {
  switch (action.type) {
    case SET_SIDEBAR_OPENED:
      return action.payload;
    default:
      return state;
  }
}
