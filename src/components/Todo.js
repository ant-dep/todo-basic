import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { modifyTodo, deleteTodo } from "../redux/todoReducer";
import styles from "../css/todo.module.css";

export default function Todo({ todo }) {
  const [isChecked, setIsChecked] = useState(todo.isCompleted);

  const checkHandler = () => {
    setIsChecked(!isChecked);
    dispatch(
      modifyTodo({
        id: todo.id,
        content: todo.content,
        isCompleted: isChecked,
      })
    );
  };
  const dispatch = useDispatch();

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        type="checkbox"
        checked={isChecked}
        onChange={checkHandler}
      />
      <div className={styles.contentContainer}>
        <p className={`${isChecked && styles.completed} ${styles.content}`}>
          {todo.content}
        </p>
      </div>
      <AiFillDelete
        className={styles.delete}
        onClick={() => {
          dispatch(deleteTodo(todo.id));
        }}
      />
    </div>
  );
}
