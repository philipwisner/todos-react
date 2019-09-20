import React from 'react';
import '../styles/ToDoList.scss';

const BottomButton = props => {
  return (
    <div className="bottom-button">
      <button className="button" onClick={props.toggleAllTodos}>
        Mark All
        <span> {props.checkAll ? 'Completed' : 'Pending'}</span>
      </button>
    </div>
  );
};

export default BottomButton;
