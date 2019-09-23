import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ToDoList.scss';

const Todo = ({ todo, toggleTodo, themeColor }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        id={todo.id}
        checked={todo.completed}
        onChange={() => toggleTodo(todo)}
      />
      <label
        htmlFor={todo.id}
        className={todo.completed ? 'checkbox-text completed' : 'checkbox-text'}
        style={todo.completed ? { color: themeColor } : null}
      >
        {todo.text}
      </label>
    </div>
  );
};

export default Todo;

Todo.propTypes = {
  todo: PropTypes.object,
  toggleTodo: PropTypes.func,
};
