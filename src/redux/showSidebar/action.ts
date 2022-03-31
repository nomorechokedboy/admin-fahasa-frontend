import { ReduxAction, StateTree } from "../types";

export const SET_SHOW_SIDEBAR = "SET_SHOW_SIDEBAR";

export type showSidebarAction = ReduxAction<boolean>;

export const setShowSidebar = (active: boolean) => ({
    type: SET_SHOW_SIDEBAR,
    payload: active,
});

export const selectShowSidebar = (state: StateTree) => state.showSidebar;
