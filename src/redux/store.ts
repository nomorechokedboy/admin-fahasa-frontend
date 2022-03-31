import { createStore, combineReducers } from "redux";
import showSidebarReducer from "./showSidebar/reducer";

const rootReducer = combineReducers({
    showSidebar: showSidebarReducer,
});

const store = createStore(rootReducer);

export default store;
