import { SET_DATABSE } from '.';
import { Action } from '../types';

export default function databaseReducer(
  state = 'in-memory',
  action: Action<string>,
): string {
  switch (action.type) {
    case SET_DATABSE:
      return action.payload;
    default:
      return state;
  }
}
