import React, { useEffect, useRef, useState } from "react";
import "./CSS/Todo.css";
import { TodoItem } from "./TodoItem";
let count = 0;
const Todo = () => {
  // core variables, usestate, use ref
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  //function for add ing a todos
  const add = () => {
    if (!inputRef.current || inputRef.current.value.trim() === "") return; // Prevent null reference

    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count);
  };
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || []; // Ensure it's an array
    setTodos(storedTodos);

    count =
      storedTodos.length > 0 ? storedTodos[storedTodos.length - 1].no + 1 : 0;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      //localstorage for data to persist
      localStorage.setItem("items", JSON.stringify(todos));
    }, 100);
  }, [todos]);
  return (
    <div className="to-do">
      <div className="todo-header">To-do List</div>
      <div className="todo-add">
        <input
          ref={inputRef}
          className="todo-input"
          type="text"
          name=""
          id=""
          placeholder="Add your task"
        />
        <div onClick={add} className="todo-add-btn">
          {" "}
          ADD
        </div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => {
          return (
            <TodoItem
              setTodos={setTodos}
              key={index}
              no={item.no}
              display={item.display}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
