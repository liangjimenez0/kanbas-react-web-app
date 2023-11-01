import React from "react";
import AddRedux from "./AddRedux";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return (
    <div>
      <h2>Redux Examples</h2>
      <TodoList />
      <AddRedux />
      <HelloRedux />
    </div>
  );
};

export default ReduxExamples;
