import { combineReducers } from 'redux';
import { SettingsTypes } from '../actions';
const initialState = {
  themeColor: '#921CE8',
  defaultTab: 'all',
};

function updateSettings(state = initialState, action) {
  switch (action.type) {
    case SettingsTypes.SET_COLOR_THEME:
      return { ...state, themeColor: action.payload };
    case SettingsTypes.SET_DEFAULT_TAB:
      return { ...state, defaultTab: action.payload };
    default:
      return state;
  }
}

const settings = combineReducers({
  updateSettings,
});

export default settings;
