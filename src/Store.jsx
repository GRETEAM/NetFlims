import { configureStore } from "@reduxjs/toolkit";
import { reducerMovies } from "./reducer/reducerMovies";
import { reducerSeries } from "./reducer/reducerSeries";

const store = configureStore({reducer: {
  reducerSeries, reducerMovies 
}});

export default store;