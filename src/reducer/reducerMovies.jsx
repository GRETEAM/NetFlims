import _ from "lodash";


const initialState = [];



export const reducerMovies = (state = initialState, action) => {
    const cloneState = _.cloneDeep(state);
    switch (action.type) {
        case "FETCH_TEST":
            console.log(action.movies[0].title) 
            return cloneState.concat(action.movies)
        // case "FETCH_DATA":
        //     console.log(action.movies[0].title) 
        //     return cloneState.concat(action.movies)
   
        default:
            return state;
    }
}