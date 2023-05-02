import React, { useEffect, useRef, useState } from "react";

import "./SingleTodo.css";

import { Todo } from "../../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import { Draggable } from "react-beautiful-dnd";

type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos, index }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          className="todo__single"
          onSubmit={(e) => {
            handleEdit(e, todo.id);
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input
              ref={inputRef}
              value={editTodo}
              onChange={(e) => {
                setEditTodo(e.target.value);
              }}
              className="todo__single-text"
            />
          ) : todo.isDone ? (
            <s className="todo__single-text">{todo.todo}</s>
          ) : (
            <span className="todo__single-text">{todo.todo}</span>
          )}

          <div className="todo__single-icons">
            <span
              className="icon"
              onClick={() => {
                if (!edit && !todo.isDone) setEdit(!edit);
              }}
            >
              <AiFillEdit />
            </span>
            <span
              className="icon"
              onClick={() => {
                handleDelete(todo.id);
              }}
            >
              <AiFillDelete />
            </span>
            <span
              className="icon"
              onClick={() => {
                handleDone(todo.id);
              }}
            >
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
