import React from 'react';
import '../styles/ToDoList.scss';

//When a user hits enter it should send action to parent to add new todo

const NewTodo = () => {
  return (
    <div className="new-todo">
      <input type="text" />
    </div>
  );
};

export default NewTodo;
