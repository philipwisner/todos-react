import { combineReducers } from 'redux';
import { updateColorTheme } from '../actions';
import appData from '../../data';

function setColorTheme(state = appData.selectedColor, action) {
  switch (action.type) {
    case updateColorTheme:
      return state;
    default:
      return state;
  }
}

const settings = combineReducers({
  setColorTheme,
});

export default settings;
