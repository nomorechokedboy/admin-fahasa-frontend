import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import NotificationReducer from "./admin/notification/reducer";
import LoginReducer from "./login/reducer";

const rootReducer = combineReducers({
    login: LoginReducer,
    notification: NotificationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
