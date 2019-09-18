import React from 'react';
import '../styles/ToDoList.scss';

class Todo extends React.Component {
  render() {
    const { todo, toggleTodo } = this.props;
    return (
      <div className="ToDoItem">
        <input
          type="checkbox"
          id={todo.id}
          checked={todo.completed}
          onChange={() => toggleTodo(todo)}
        />
        <label htmlFor={todo.id} className="CheckBoxText">
          {todo.text}
        </label>
      </div>
    );
  }
}

export default Todo;
