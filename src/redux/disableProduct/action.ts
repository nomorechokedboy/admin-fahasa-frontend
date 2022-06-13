import { DISABLE_PRODUCT, ENABLE_PRODUCT, TOGGLE_PRODUCT } from './type';
import { Action, StateTree } from '../types';

export const setDisableProduct = (): Action<boolean> => ({
  payload: true,
  type: DISABLE_PRODUCT,
});

export const setEnableProduct = (): Action<boolean> => ({
  payload: false,
  type: ENABLE_PRODUCT,
});

export const toggleDisabledProduct = (): Action<null> => ({
  payload: null,
  type: TOGGLE_PRODUCT,
});

export const getDisabledProduct = (state: StateTree) => state.disabled;
