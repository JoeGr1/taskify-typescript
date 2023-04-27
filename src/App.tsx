import React, { useState } from "react";
import "./App.css";
import { InputFeild } from "./components/InputFeild/InputFeild";
import { TodoList } from "./components/TodoList/TodoList";

// import { v4 as uuid } from "uuid";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">taskify</span>

      <InputFeild todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
