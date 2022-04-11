import { Action, StateTree } from "@/redux/types";
import NotificationState, { SET_ERRORS, SET_NOTIFICATIONS } from "./types";

export const setNotifications = (
    messages: string[],
): Action<NotificationState> => ({
    payload: {
        isError: false,
        messages,
    },
    type: SET_NOTIFICATIONS,
});

export const setErros = (messages: string[]): Action<NotificationState> => ({
    payload: {
        isError: true,
        messages,
    },
    type: SET_ERRORS,
});

export const getNotificationState = (state: StateTree) => state.notification;
