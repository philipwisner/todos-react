const Types = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  EDIT_TODO: " EDIT_TODO",
  DELETE_TODO: "DELETE_TODO",
  SET_FITLER: "SET_FILTER"
};

const FilterTypes = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_PENDING: "SHOW_PENDING",
  SHOW_COMPLETED: "SHOW_COMPLETED"
};

const addTodo = todo => ({
  type: Types.ADD_TODO,
  payload: todo
});

const toggleTodo = index => ({
  type: Types.TOGGLE_TODO,
  payload: index
});

const editTodo = todo => ({
  type: Types.EDIT_TODO,
  payload: todo
});

const deleteTodo = index => ({
  type: Types.DELETE_TODO,
  payload: index
});

const setFilter = filter => ({
  type: Types.SET_FITLER,
  payload: filter
});

export default {
  Types,
  addTodo,
  toggleTodo,
  editTodo,
  deleteTodo,
  setFilter
};
