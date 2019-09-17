import React from "react";
import { Todo } from "./";
import "../styles/ToDoList.scss";

const TodoList = () => {
  return (
    <div className="ToDoList">
      <Todo />
    </div>
  );
};

export default TodoList;
