import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ToDoList.scss';

const BottomButton = ({ toggleAllTodos, checkAll, themeColor }) => {
  return (
    <div className="bottom-button">
      <button className="button" onClick={toggleAllTodos} style={{ color: themeColor }}>
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
