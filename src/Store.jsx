import { configureStore } from "@reduxjs/toolkit";
import { reducerMovies } from "./reducer/reducerMovies";
import { reducerSeries } from "./reducer/reducerSeries";
import { reducerPerson } from "./reducer/reducerPerson";
import { reducerUser } from "./reducer/reducerUser";


const store = configureStore({reducer: {
  reducerSeries, reducerMovies, reducerPerson, reducerUser
  
 
}});

export default store;