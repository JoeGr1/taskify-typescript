import React, { useState } from "react";
import "./App.css";
import { InputFeild } from "./components/InputFeild/InputFeild";
import { TodoList } from "./components/TodoList/TodoList";

import { DragDropContext, DropResult } from "react-beautiful-dnd";

// import { v4 as uuid } from "uuid";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">taskify</span>

        <InputFeild todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
