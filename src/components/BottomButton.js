import React from 'react';
import PropTypes from 'prop-types';
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

BottomButton.propTypes = {
  toggleAllTodos: PropTypes.func,
  checkAll: PropTypes.bool,
};
