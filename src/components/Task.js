import React from "react";

function Task({ text, category, id, deleteItem }) {
  function clickHandler(){
    const objToDelete = ({ text, category, id })
    deleteItem(objToDelete)
  }

  return (
    <div className="task" id={id}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" id={id} onClick={clickHandler}>X</button>
    </div>
  );
}

export default Task;
