import React, { useState, useEffect } from 'react';
import { NewTodo, FilterBar, TodoList, BottomButton } from '../components';
import '../styles/Containers.scss';
import appData from '../data';

const TodoListContainer = () => {
  const themeColor = appData.selectedColor;
  const [todos, setTodos] = useState(appData.todos);
  const [newTodoValue, setNewTodoValue] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [checkAll, setCheckAll] = useState(true);

  useEffect(() => handleFilterTodos(), [selectedFilter, todos]);

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
      setFilteredTodos(todos);
    }
  }

  //CHILD FUNCTIONS
  const handleToggleFilter = value => {
    setSelectedFilter(value);
  };

  const handleChange = e => {
    setNewTodoValue(e.target.value);
  };

  const clearInput = () => {
    console.log('clear input ran');
    setNewTodoValue('');
    console.log('value is', newTodoValue);
  };

  const enterPressed = event => {
    let code = event.keyCode || event.which;
    if (code === 13 && newTodoValue !== '') {
      let todo = { id: todos.length + 1, text: newTodoValue, completed: false };
      handleAddTodo(todo);
    }
  };

  const handleAddTodo = todo => {
    setTodos([...todos, todo]);
    setNewTodoValue('');
    clearInput();
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
      <NewTodo
        addTodo={enterPressed}
        newTodoValue={newTodoValue}
        onChange={handleChange}
        clearInput={clearInput}
      />
      <FilterBar
        selectedFilter={selectedFilter}
        toggleFilter={handleToggleFilter}
        themeColor={themeColor}
      />
      <TodoList
        todos={filteredTodos}
        selectedFilter={selectedFilter}
        toggleTodo={handleToggleTodo}
        themeColor={themeColor}
      />
      <BottomButton
        checkAll={checkAll}
        themeColor={themeColor}
        toggleAllTodos={handleToggleAllTodos}
      />
    </div>
  );
};

export default TodoListContainer;
