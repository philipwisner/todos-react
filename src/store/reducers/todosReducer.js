import { combineReducers } from 'redux';
import { Types } from '../actions';

const initialState = {
  todos: [
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

function transformTodos(state = initialState.todos, action) {
  switch (action.type) {
    case Types.ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.payload,
          completed: false,
        },
      ];
    case Types.TOGGLE_TODO:
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
  transformTodos,
});

export default todos;
