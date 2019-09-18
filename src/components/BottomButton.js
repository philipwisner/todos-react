import React from 'react';
import '../styles/ToDoList.scss';

const BottomButton = props => {
  return (
    <div className="BottomButton">
      <button className="Button" onClick={props.toggleAllTodos}>
        Mark All
        <span> {props.checkAll ? 'Completed' : 'Pending'}</span>
      </button>
    </div>
  );
};

export default BottomButton;
