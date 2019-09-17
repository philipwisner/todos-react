import React from "react";
import "../styles/ToDoList.scss";

const Todo = () => {
  return (
    <div className="ToDoItem">
      <input type="checkbox" id="1" />
      <label htmlFor="1">Grocery Shopping</label>
    </div>
  );
};

export default Todo;
