import React from 'react';
import '../styles/ToDoList.scss';

//This needs to recieve props from parent to display todo with id
//This needs to send action to parent that item's status was changed with id

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
