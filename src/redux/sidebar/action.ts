import { Action, StateTree } from '@/redux/types';
import { SET_SIDEBAR_OPENED } from './types';

export const setSideBarOpened = (opened: boolean): Action<boolean> => ({
  type: SET_SIDEBAR_OPENED,
  payload: opened,
});

export const getSideBarState = (state: StateTree) => state.sidebar;
