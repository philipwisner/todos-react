import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { NewTodo, FilterBar, TodoList, BottomButton } from '../components';
import { addTodo, toggleTodo } from '../store/actions';
import '../styles/Containers.scss';

const TodoListContainer = props => {
  const themeColor = props.themeColor;
  const storeTodos = props.todos;
  const dispatch = useDispatch();
  const [todos, setTodos] = useState(storeTodos);
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
    setNewTodoValue('');
  };

  const enterPressed = event => {
    let code = event.keyCode || event.which;
    if (code === 13 && newTodoValue !== '') {
      let todo = { id: todos.length + 1, text: newTodoValue, completed: false };
      handleAddTodo(todo);
    }
  };

  const handleAddTodo = todo => {
    dispatch(addTodo(todo));
    setTodos([...todos, todo]);
    setNewTodoValue('');
    clearInput();
  };

  const handleToggleTodo = selectedTodo => {
    dispatch(toggleTodo(selectedTodo));
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

const mapStateToProps = store => {
  return {
    themeColor: store.settings.updateSettings.themeColor,
    todos: store.todos.transformTodos,
  };
};

export default connect(mapStateToProps)(TodoListContainer);
