const Types = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  EDIT_TODO: " EDIT_TODO",
  DELETE_TODO: "DELETE_TODO",
  SET_FITLER: "SET_FILTER"
};
// actions
const createItem = task => ({
  type: Types.CREATE_ITEM,
  payload: task
});

const deleteItem = id => ({
  type: Types.DELETE_ITEM,
  payload: id
});

export default {
  createItem,
  deleteItem,
  Types
};
