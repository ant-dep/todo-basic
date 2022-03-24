import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      content: "finir cet exercice",
      isCompleted: false,
    },
    {
      id: 2,
      content: "get a review",
      isCompleted: false,
    },
  ]);
  const [newTodo, setNewTodo] = useState();

  return (
    <div className="App">
      <div>
        <h1>Todo List</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Veuillez renseiger une nouvelle tâche"
          onChange={(e) => {
            setNewTodo({
              id: todo.length + 1,
              content: e.target.value,
              isCompleted: false,
            });
          }}
        />
        <button
          onClick={() => {
            console.log(newTodo, "newTodo");
            setTodo([...todo, newTodo]);
          }}
        >
          Ajouter
        </button>
      </div>
      <div className="todosList">
        {todo?.map((el) => (
          <Todo key={el.id} todo={el} />
        ))}
      </div>
    </div>
  );
}

export default App;
