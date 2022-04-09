import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import LoginReducer from "./login/reducer";

const rootReducer = combineReducers({
    login: LoginReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
