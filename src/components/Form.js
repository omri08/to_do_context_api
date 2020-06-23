import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
function Form() {
  const [value, setValue] = useState("Enter toDo");
  const { addTodo } = useContext(GlobalContext);

  const createTodo = () => {
    const newTodo = {
      text: value,
      id: Math.floor(Math.random() * 100000),
    };

    addTodo(newTodo);
  };

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={createTodo}>Sumbit</button>
    </div>
  );
}

export default Form;
