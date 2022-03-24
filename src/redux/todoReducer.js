import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      content: "finir cet exercice",
      isCompleted: false,
    },
    {
      id: 2,
      content: "en espérant que vous validiez...",
      isCompleted: false,
    },
    {
      id: 3,
      content: "get a review",
      isCompleted: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    modifyTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.isCompleted = action.payload.isCompleted;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { setTodo, modifyTodo, deleteTodo } = todoSlice.actions;

// selectors
export const selectTodo = (state) => state.todos;

//*  createSlice will return an object that looks like:
// {
//     name : string,
//     reducer : ReducerFunction,
//     actions : Record<string, ActionCreator>,
//     caseReducers: Record<string, CaseReducer>
// }
//
// *//
export default todoSlice.reducer;
