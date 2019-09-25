import { combineReducers } from 'redux';
import { updateColorTheme } from '../actions';
const initialState = {
  themeColor: '#921CE8',
};

function setColorTheme(state = initialState, action) {
  switch (action.type) {
    case updateColorTheme:
      return { ...state, selectedColor: action.payload };
    default:
      return state;
  }
}

const settings = combineReducers({
  setColorTheme,
});

export default settings;
