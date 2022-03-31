import { SET_SHOW_SIDEBAR, showSidebarAction } from "./action";

export default function showSidebarReducer(
    active = true,
    action: showSidebarAction,
) {
    switch (action.type) {
        case SET_SHOW_SIDEBAR:
            return action.payload;
        default:
            return active;
    }
}
