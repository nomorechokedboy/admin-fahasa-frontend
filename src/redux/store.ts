import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import NotificationReducer from './admin/notification/reducer';
import LoginReducer from './login/reducer';
import SideBarReducer from './sidebar/reducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  notification: NotificationReducer,
  sidebar: SideBarReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
