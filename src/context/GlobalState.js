import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  todos: [
    {
      text: "Study",
      id: 1,
    },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTodo(id) {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  }

  function addTodo(todo) {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        deleteTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
