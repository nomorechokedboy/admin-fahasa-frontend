import { DISABLE_PRODUCT, ENABLE_PRODUCT, TOGGLE_PRODUCT } from '.';
import { Action } from '../types';

export default function DisabledProductReducer(
  state = true,
  action: Action<boolean>,
): boolean {
  switch (action.type) {
    case DISABLE_PRODUCT:
      return action.payload;
    case ENABLE_PRODUCT:
      return action.payload;
    case TOGGLE_PRODUCT:
      return !state;
    default:
      return state;
  }
}
