export const SET_ERRORS = "SET_ERRORS";
export const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";
export default interface NotificationState {
    isError: boolean;
    messages: string[];
}
