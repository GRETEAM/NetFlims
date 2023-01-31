import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/actionMovies';

const Movies = () => {
   const dispatch = useDispatch();

    useEffect(() => {
        const loadMovies = async () => {
            await dispatch(fetchData());
        };
        loadMovies();
    }, [dispatch]);

    const movies = useSelector(store => store.reducerMovies);
    console.log(movies);
    return (
        <div>Movies</div>
    )
}
export default Movies;