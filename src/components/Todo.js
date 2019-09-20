import React from 'react';
import '../styles/ToDoList.scss';

const Todo = ({ todo, toggleTodo }) => {
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
      >
        {todo.text}
      </label>
    </div>
  );
};

export default Todo;
