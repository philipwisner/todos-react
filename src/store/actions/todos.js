export const Types = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  TOGGLE_ALL: 'TOGGLE_ALL',
  EDIT_TODO: ' EDIT_TODO',
  DELETE_TODO: 'DELETE_TODO',
  SET_FITLER: 'SET_FILTER',
  FILTER_TODOS: 'FILTER_TODOS',
};

export const FilterTypes = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_PENDING: 'SHOW_PENDING',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
};

export const addTodo = todo => ({
  type: Types.ADD_TODO,
  payload: todo,
});

export const toggleTodo = todo => ({
  type: Types.TOGGLE_TODO,
  payload: todo,
});

export const toggleAll = todos => ({
  type: Types.TOGGLE_ALL,
  payload: todos,
});

export const editTodo = todo => ({
  type: Types.EDIT_TODO,
  payload: todo,
});

export const deleteTodo = index => ({
  type: Types.DELETE_TODO,
  payload: index,
});

export const setFilter = filter => ({
  type: Types.SET_FITLER,
  payload: filter,
});
