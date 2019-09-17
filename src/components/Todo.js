import React from "react";
import "../styles/ToDoList.scss";

//This needs to recieve props from parent to display todo with id
//This needs to send action to parent that item's status was changed with id

class Todo extends React.Component {
  state = {};

  render() {
    return (
      <div className="ToDoItem">
        <input type="checkbox" id="1" />
        <label htmlFor="1">Grocery Shopping</label>
      </div>
    );
  }
}

export default Todo;
