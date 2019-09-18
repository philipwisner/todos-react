import React from 'react';
import { NewTodo, FilterBar, TodoList, BottomButton } from '../components';
import '../styles/Containers.scss';
import appData from '../data';

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: appData.todos,
      selectedFilter: 'all',
      checkAll: true,
    };
  }

  filterTodos() {
    const { selectedFilter } = this.state;
    if (selectedFilter === 'pending') {
      this.setState({
        todos: appData.todos.filter(todo => {
          return !todo.completed;
        }),
      });
    } else if (selectedFilter === 'completed') {
      this.setState({
        todos: appData.todos.filter(todo => {
          return todo.completed;
        }),
      });
    } else {
      this.setState({
        todos: appData.todos,
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
      <div className="Home">
        <NewTodo addTodo={this.addTodo} />
        <FilterBar selectedFilter={this.state.selectedFilter} toggleFilter={this.toggleFilter} />
        <TodoList
          todos={this.state.todos}
          selectedFilter={this.state.selectedFilter}
          toggleTodo={this.toggleTodo}
        />
        <BottomButton checkAll={this.state.checkAll} toggleAllTodos={this.toggleAllTodos} />
      </div>
    );
  }
}

export default TodoListContainer;
