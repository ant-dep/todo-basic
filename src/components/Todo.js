import React from "react";

export default function Todo({ todo }) {
  console.log(todo);
  return (
    <div>
      <input type="checkbox" />
      <p className={`${todo.isCompleted && "underline"}`}>{todo.content}</p>
      <i onClick={() => {}}>poubelle</i>
    </div>
  );
}
