import { useSelector, useDispatch } from "react-redux";
import { selectTodo, setTodo } from "../redux/todoReducer";
import Todo from "./Todo";
import { useRef, useState } from "react";
import styles from "../css/todos.module.css";

export default function Todos() {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  const inputRef = useRef(null);

  return (
    <>
      <div className={styles.header}>
        <h1>Todo List</h1>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Veuillez renseigner une nouvelle tâche"
          ref={inputRef}
          onChange={(e) => {
            setNewTodo({
              id: todos.length + 1,
              content: e.target.value,
              isCompleted: false,
            });
          }}
        />
        <button
          className={styles.button}
          onClick={() => {
            console.log(newTodo, "newTodo");
            dispatch(setTodo(newTodo));
            inputRef.current.value = "";
          }}
        >
          Ajouter
        </button>
      </div>
      <div className={styles.todosContainer}>
        {todos?.map((el) => (
          <Todo key={el.id} todo={el} />
        ))}
      </div>
    </>
  );
}
