import React from 'react';
import '../styles/ToDoList.scss';
import { clear } from '../assets/images';

const NewTodo = ({ newTodoValue, addTodo, onChange, clearInput }) => {
  return (
    <div className="new-todo">
      <input type="text" onChange={onChange} value={newTodoValue} onKeyPress={addTodo.bind(this)} />
      <img onClick={clearInput} className="clear-button" src={clear} alt="" />
    </div>
  );
};

export default NewTodo;
