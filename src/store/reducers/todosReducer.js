import { combineReducers } from 'redux';
import { addTodo, toggleTodo, setFilter, FilterTypes } from '../actions';
// import _ from 'lodash';

const initialState = {
  visibilityFilter: 'SHOW_ALL',
  transformTodos: [
    {
      id: 1,
      text: 'Grocery Shopping',
      completed: true,
    },
    {
      id: 2,
      text: 'Clean Room',
      completed: false,
    },
    {
      id: 3,
      text: 'Study Spanish',
      completed: false,
    },
    {
      id: 4,
      text: 'Learn Git',
      completed: false,
    },
    {
      id: 5,
      text: 'Learn React',
      completed: false,
    },
    {
      id: 6,
      text: 'Learn Redux',
      completed: false,
    },
  ],
};

function visibilityFilter(state = initialState, action) {
  switch (action.type) {
    case setFilter:
      return { ...state, selectedFilter: action.payload };
    default:
      return state;
  }
}

function transformTodos(state = initialState, action) {
  switch (action.type) {
    case addTodo:
      return [
        ...state,
        {
          text: action.payload,
          completed: false,
        },
      ];
    case toggleTodo:
      return state.map((todo, index) => {
        if (index === action.payload) {
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
