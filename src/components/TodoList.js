import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './';
import '../styles/ToDoList.scss';

//This needs props of todos so that it can generate todo list based off filter status
const TodoList = ({ todos, toggleTodo, selectedFilter }) => {
  const todoList = todos.map(todo => {
    return <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />;
  });
  return (
    <div className="todo-list">
      {todoList.length >= 1 ? todoList : `No ${selectedFilter} todos`}
    </div>
  );
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func,
  selectedFilter: PropTypes.string,
};
