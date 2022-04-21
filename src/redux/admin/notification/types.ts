export const SET_ERROR = 'SET_ERROR';
export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION';
export default interface NotificationState {
  isError: boolean;
  message: string;
}
