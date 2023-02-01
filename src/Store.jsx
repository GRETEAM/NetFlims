import { configureStore } from "@reduxjs/toolkit";
import { reducerMovies } from "./reducer/reducerMovies";
import { reducerSeries } from "./reducer/reducerSeries";
import { reducerPerson } from "./reducer/reducerPerson";

const store = configureStore({reducer: {
  reducerSeries, reducerMovies, reducerPerson
 
}});

export default store;