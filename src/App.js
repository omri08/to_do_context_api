import React from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Form />
        <TodoList />
      </div>
    </GlobalProvider>
  );
}

export default App;
