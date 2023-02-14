import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDosStructure } from "../../../types";

const initialToDos: ToDosStructure = [];

const toDosSlice = createSlice({
  name: "toDos",
  initialState: initialToDos,
  reducers: {
    loadToDos: (currentToDos, action: PayloadAction<ToDosStructure>) => [
      ...action.payload,
    ],
    removeToDos: (currentToDos, action: PayloadAction<number>) =>
      currentToDos.filter((toDo) => toDo.id !== action.payload),

    toggleTodoisDone: (currentToDos, action: PayloadAction<number>) =>
      currentToDos.map((toDo) => ({
        ...toDo,
        isDone: toDo.id === action.payload ? !toDo.isDone : toDo.isDone,
      })),
  },
});

export const toDosReducer = toDosSlice.reducer;
export const {
  loadToDos: loadToDosActionCreator,
  removeToDos: removeToDosActionCreator,
  toggleTodoisDone: toggleToDosisDoneActionCreator,
} = toDosSlice.actions;
