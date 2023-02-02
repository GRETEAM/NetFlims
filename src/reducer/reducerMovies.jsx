import _ from "lodash";


const initialState = [];



export const reducerMovies = (state = initialState, action) => {
    const cloneState = _.cloneDeep(state);
    switch (action.type) {
        case "INIT_MOVIES":
            return action.movies
        case "FETCH_SCROLL":
            console.log(action.movies[0].title) 
            if (cloneState.length > 0){
                return cloneState.concat(action.movies)
            }
            return action.movies
        default:
            return state;
    }
}