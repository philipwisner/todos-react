import React, { useState, useEffect } from 'react';
import { NewTodo, FilterBar, TodoList, BottomButton } from '../components';
import '../styles/Containers.scss';
import appData from '../data';

//REFACTOR TO FUNCTIONAL COMPONENTS
const TodoListContainer = () => {
  const [todos, setTodos] = useState(appData.todos);
  const [filteredTodos, setFilteredTodos] = useState(appData.todos);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [checkAll, setCheckAll] = useState(true);

  useEffect(() => handleFilterTodos(), [selectedFilter]);

  function handleFilterTodos() {
    if (selectedFilter === 'pending') {
      setFilteredTodos(
        todos.filter(todo => {
          return !todo.completed;
        }),
      );
    } else if (selectedFilter === 'completed') {
      setFilteredTodos(
        todos.filter(todo => {
          return todo.completed;
        }),
      );
    } else {
      setFilteredTodos({
        todos,
      });
    }
  }

  //CHILD FUNCTIONS
  const handleToggleFilter = value => {
    setSelectedFilter(value);
  };

  const handleAddTodo = todo => {
    setTodos([...todos, todo]);
  };

  const handleToggleTodo = selectedTodo => {
    setTodos(
      todos.map(todo => {
        todo.id === selectedTodo.id
          ? (todo.completed = !todo.completed)
          : (todo.completed = todo.completed);
        return todo;
      }),
    );
  };

  const handleToggleAllTodos = () => {
    setTodos(
      todos.map(todo => {
        checkAll ? (todo.completed = true) : (todo.completed = false);
        return todo;
      }),
    );
    setCheckAll(!checkAll);
  };

  return (
    <div className="home">
      <NewTodo addTodo={handleAddTodo} />
      <FilterBar selectedFilter={selectedFilter} toggleFilter={handleToggleFilter} />
      <TodoList
        todos={filteredTodos}
        selectedFilter={selectedFilter}
        toggleTodo={handleToggleTodo}
      />
      <BottomButton checkAll={checkAll} toggleAllTodos={handleToggleAllTodos} />
    </div>
  );
};

export default TodoListContainer;
