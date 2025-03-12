import React from "react";
import "./CSS/TodoItem.css";
import tick from "./Assets/tick.png";
import not_tick from "./Assets/not_tick.png";
import cross from "./Assets/cross.png";
export const TodoItem = ({ no, display, text, setTodos }) => {
  //check item
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos")) || []; // Ensure it's always an array

    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }

    setTodos([data]);
  };
  return (
    <div className="todoitems">
      <div
        className={`todoitems-container ${display}`}
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <img src={not_tick} alt="" />
        ) : (
          <img src={tick} alt="" />
        )}
        <div className="todoitems-text">{text}</div>
      </div>
      <img className="todoitems-cross-icon" src={cross} alt="" />
    </div>
  );
};
