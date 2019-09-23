import { combineReducers } from 'redux';
import settings from './settingsReducer';
import todos from './todosReducer';

const rootReducer = combineReducers({
  settings,
  todos,
});

export default rootReducer;
