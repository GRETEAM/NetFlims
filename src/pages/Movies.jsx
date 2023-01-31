import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/actionMovies';

const Movies = () => {
    const [data, SetData] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        const loadMovies = async () => {
            await dispatch(fetchData());
        };
        loadMovies();
    }, [dispatch]);
    const movies = useSelector(store => store.reducerMovies);
    // console.log(movies)
    useEffect(() => {
        SetData(movies.data)
    }, [movies]);
    return (
        <div>
            movies
            {data.length == 0 || undefined ? console.log("loading"):
            data.map((movie)=>{
                    console.log(movie);
                })

            }
          
        </div>
    )
}
export default Movies;