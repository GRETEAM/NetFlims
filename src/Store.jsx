import { configureStore } from "@reduxjs/toolkit";
import { reducerAllTypes } from "./reducer/reducerAllTypes";
import { reducerMovies } from "./reducer/reducerMovies";
import { reducerPerson } from "./reducer/reducerPerson";
import { reducerSeries } from "./reducer/reducerSeries";
import { reducerUser } from "./reducer/reducerUser";


const store = configureStore({
  reducer: {
    reducerSeries,
    reducerMovies,
    reducerPerson,
    reducerUser,
    reducerAllTypes,
  },
});

export default store;