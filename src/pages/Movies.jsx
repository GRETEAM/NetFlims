import React from 'react'
import { useSelector } from 'react-redux'

const Movies = () => {
    const Movies =useSelector((store)=>{return store.reducerMovies})
    console.log(Movies);
    return (
        <div>Movies</div>
    )
}
export default Movies