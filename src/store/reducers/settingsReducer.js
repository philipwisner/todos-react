import { combineReducers } from 'redux';
import { updateColorTheme } from '../actions';
import _ from 'lodash';
import appData from '../../data';

function setColorTheme(state, action) {
  switch (action.type) {
    case updateColorTheme:
      return action.theme;
    default:
      return state;
  }
}

const settings = combineReducers({
  setColorTheme,
});

export default settings;
