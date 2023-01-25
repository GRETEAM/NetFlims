import { configureStore } from "@reduxjs/toolkit"
import { reducerSeries } from "./reducer/reducerSeries"
import { reducerMovies } from "./reducer/reducerMovies"

const Store = configureStore({reducer:{reducerSeries,reducerMovies}})
export default Store