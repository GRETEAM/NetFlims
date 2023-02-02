const initialState = [];

// const initialState = {
//     data: []
// };

export const reducerMovies = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA': 
        console.log(action)
            // console.log(state)
            return action.payload ;
        // case 'FETCH_SCROLL':
        //     return { ...state, }
        default:
            return state;
    }
}