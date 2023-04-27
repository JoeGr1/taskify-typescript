import React from "react";

import "./InputFeild.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

export const InputFeild: React.FC<Props> = ({
  todo,
  setTodo,
  handleSubmit,
}) => {
  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="input"
        className="input__box"
        placeholder="Enter Task"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};
