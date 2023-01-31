import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/actionMovies';
import Loader from '../components/Loader';

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
    console.log(data)
    return (
        //style a mettre plus tard dans le style
        <div style={{position:"relative"}}>
            {data.length == 0 || undefined ? <Loader/>:
            data.map((movie)=>{
                if(movie.media_type === "movie")
                return <div key={movie.id}> 
                    <p>{movie.original_title || movie.name}</p>
                    <p>{movie.release_date}</p>
                    
                </div>
            })

            }
          
        </div>
    )
}
export default Movies;