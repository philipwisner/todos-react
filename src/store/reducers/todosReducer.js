import { combineReducers } from 'redux';
import { addTodo, toggleTodo, setFilter, FilterTypes } from '../actions';
// import _ from 'lodash';
import appData from '../../data';
const { SHOW_ALL } = FilterTypes;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case setFilter:
      return action.filter;
    default:
      return state;
  }
}

function transformTodos(state = appData.todos, action) {
  switch (action.type) {
    case addTodo:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case toggleTodo:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

const todos = combineReducers({
  visibilityFilter,
  transformTodos,
});

export default todos;
