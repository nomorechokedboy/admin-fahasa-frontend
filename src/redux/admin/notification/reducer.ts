import { Action } from "@/redux/types";
import { SET_ERRORS, SET_NOTIFICATIONS } from ".";
import NotificationState from "./types";

const initialState: NotificationState = {
    isError: false,
    message: "",
};

export default function NotificationReducer(
    state = initialState,
    action: Action<NotificationState>,
) {
    switch (action.type) {
        case SET_ERRORS:
            return action.payload;
        case SET_NOTIFICATIONS:
            return action.payload;
        default:
            return state;
    }
}
