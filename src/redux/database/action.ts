import { Action, StateTree } from '../types';
import { SET_DATABSE } from './types';

export const setDatabase = (db: string): Action<string> => ({
  payload: db,
  type: SET_DATABSE,
});

export const getDatabaseState = (state: StateTree) => state.database;
