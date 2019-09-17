import React from "react";
import { NewTodo, FilterBar, TodoList, BottomButton } from "../components";
import "../styles/Containers.scss";

const TodoListContainer = () => {
  return (
    <div className="Home">
      <NewTodo />
      <FilterBar />
      <TodoList />
      <BottomButton />
    </div>
  );
};

export default TodoListContainer;
