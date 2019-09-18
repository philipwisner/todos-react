import React from 'react';
import { Todo } from './';
import '../styles/ToDoList.scss';

//This needs props of todos so that it can generate todo list based off filter status
const TodoList = props => {
  const todoList = props.todos.map(todo => {
    return <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo} />;
  });
  return <div className="ToDoList">{todoList}</div>;
};

export default TodoList;
