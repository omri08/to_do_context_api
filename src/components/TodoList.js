import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Todo from "./Todo";

function ToDoList() {
  const { todos } = useContext(GlobalContext);
  return (
    <div className="todos">
      {todos.map(({ text, id }) => (
        <Todo key={id} text={text} id={id} />
      ))}
    </div>
  );
}

export default ToDoList;
