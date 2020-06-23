import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
function Todo({ text, id }) {
  const { deleteTodo } = useContext(GlobalContext);

  return (
    <div className="todo">
      <li className="todo__text">{text}</li>
      <button onClick={() => deleteTodo(id)} className="todo__button">
        Delete
      </button>
    </div>
  );
}

export default Todo;
