import React from 'react';
import '../styles/ToDoList.scss';

const BottomButton = ({ toggleAllTodos, checkAll }) => {
  return (
    <div className="bottom-button">
      <button className="button" onClick={toggleAllTodos}>
        Mark All
        <span> {checkAll ? 'Completed' : 'Pending'}</span>
      </button>
    </div>
  );
};

export default BottomButton;
