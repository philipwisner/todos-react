import React from "react";
import "../styles/ToDoList.scss";

//When clicked it should make all visible items completed
//This should be dynamic and change based off filter option

const BottomButton = () => {
  return (
    <div className="BottomButton">
      <button className="Button">Mark All Completed</button>
    </div>
  );
};

export default BottomButton;
