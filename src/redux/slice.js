import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
name:'sadasdsadsadsadsadsadsadsas',
initialState:0,
reducers:{
increment: (state) =>state + 1,
decrement: (state) => state - 1
}
})


export const {increment,decrement} = slice.actions;
export const countReducer = slice.reducer;