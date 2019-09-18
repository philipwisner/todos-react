import { combineReducers } from "redux";
import { addTodo, toggleTodo, setFilter, FilterTypes } from "./action";
import _ from "lodash";
import appData from "../data";
const { SHOW_ALL, SHOW_PENDING, SHOW_COMPLETED } = FilterTypes;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case setFilter:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = appData.todos, action) {
  switch (action.type) {
    case addTodo:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case toggleTodo:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
