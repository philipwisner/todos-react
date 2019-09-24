import React from 'react';
import '../styles/ToDoList.scss';
import { clear } from '../assets/images';

const NewTodo = ({ newTodoValue, addTodo, onChange, clearInput }) => {
  return (
    <div className="new-todo">
      <input type="text" onChange={onChange} value={newTodoValue} onKeyPress={addTodo.bind(this)} />
      {newTodoValue ? (
        <img onClick={clearInput} className="clear-button" src={clear} alt="" />
      ) : null}
    </div>
  );
};

export default NewTodo;
