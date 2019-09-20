import React, { Component } from 'react';
import { NewTodo, FilterBar, TodoList, BottomButton } from '../components';
import '../styles/Containers.scss';
import appData from '../data';

class TodoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: appData.todos,
      filteredTodos: [],
      selectedFilter: 'all',
      checkAll: true,
    };
  }

  componentDidMount() {
    this.setState({ filteredTodos: this.state.todos });
  }

  filterTodos() {
    const { selectedFilter, todos } = this.state;
    if (selectedFilter === 'pending') {
      this.setState({
        filteredTodos: todos.filter(todo => {
          return !todo.completed;
        }),
      });
    } else if (selectedFilter === 'completed') {
      this.setState({
        filteredTodos: todos.filter(todo => {
          return todo.completed;
        }),
      });
    } else {
      this.setState({
        filteredTodos: todos,
      });
    }
  }

  //CHILD FUNCTIONS
  toggleFilter = value => {
    this.setState({ selectedFilter: value }, () => {
      this.filterTodos();
    });
  };

  addTodo = todo => {
    const { todos } = this.state;
    this.setState({ todos: [...todos, todo] });
  };

  toggleTodo = selectedTodo => {
    const { todos } = this.state;
    this.setState(
      {
        todos: todos.map(todo => {
          todo.id === selectedTodo.id
            ? (todo.completed = !todo.completed)
            : (todo.completed = todo.completed);
          return todo;
        }),
      },
      () => {
        setTimeout(() => {
          this.filterTodos();
        }, 500);
      },
    );
  };

  toggleAllTodos = () => {
    const { todos, checkAll } = this.state;
    this.setState(
      {
        todos: todos.map(todo => {
          this.state.checkAll ? (todo.completed = true) : (todo.completed = false);
          return todo;
        }),
        checkAll: !checkAll,
      },
      () => {
        setTimeout(() => {
          this.filterTodos();
        }, 500);
      },
    );
  };

  render() {
    return (
      <div className="home">
        <NewTodo addTodo={this.addTodo} />
        <FilterBar selectedFilter={this.state.selectedFilter} toggleFilter={this.toggleFilter} />
        <TodoList
          todos={this.state.filteredTodos}
          selectedFilter={this.state.selectedFilter}
          toggleTodo={this.toggleTodo}
        />
        <BottomButton checkAll={this.state.checkAll} toggleAllTodos={this.toggleAllTodos} />
      </div>
    );
  }
}

export default TodoListContainer;
