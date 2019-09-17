import React from "react";
import { Todo } from "./";
import "../styles/ToDoList.scss";

//This needs props of todos so that it can generate todo list based off filter status

const TodoList = () => {
  return (
    <div className="ToDoList">
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
};

export default TodoList;
