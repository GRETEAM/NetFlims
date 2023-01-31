import moment from "moment";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/actionMovies';
import { Swiper, SwiperSlide } from "swiper/react";
import Loader from '../components/Loader';
import "swiper/scss";

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
    useEffect(() => {
        SetData(movies.data)
    }, [movies]);
    return (
        //style a mettre plus tard dans le style
        // <div style={{ position: "relative" }}>
        <main className="container">
            <section className="trending">
                <h1 className="title">Movies</h1>
            </section>
            {data.length == 0 || undefined ? <Loader /> :
                <Swiper className="slider">
                    {data.map((movie) => {
                        if (movie.media_type === "movie")
                            return <SwiperSlide className="slider-content" key={movie.id}>
                                <img
                                    className="slider-content-img"
                                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                    alt={movie.title || movie.name}
                                />
                                <div className="slider-content-text">
                                    <div className="infos trending-title-infos">
                                        <p>{moment(movie.release_date).format("YYYY")}</p>
                                        <span className="infos-circle"></span>
                                        <p className="infos-movie trending-title-infos">{movie.media_type}</p>
                                    </div>
                                    <h2 className="trending-title">
                                        {movie.original_title || movie.name}
                                    </h2>
                                </div>
                            </SwiperSlide>

                    })}
                </Swiper>
            }
        </main>
    )
}
export default Movies;