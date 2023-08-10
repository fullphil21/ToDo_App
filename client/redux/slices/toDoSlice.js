import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  toDos: [],
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    setToDos: (state, action) => {
      state.toDos = action.payload;
    },
    addToDo: (state, action) => {
      state.toDos = [action.payload, ...state.toDos];
    },
  },
});

export const { setToDos, addToDo } = toDoSlice.actions;

export const selectToDos = (state) => state.toDo.toDos;

export default toDoSlice.reducer;
