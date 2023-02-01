import moment from "moment";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/actionMovies';
import { Swiper, SwiperSlide } from "swiper/react";
import Loader from '../components/Loader';
import "swiper/scss";


const Series = () => {
    const [data, SetData] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        const loadSeries = async () => {
            await dispatch(fetchData());
        };
        loadSeries();
    }, [dispatch]);
    const Series = useSelector(store => store.reducerSeries);
    // console.log(Series)
    useEffect(() => {
        SetData(Series.data)
    }, [Series]);
    return (
        //style a mettre plus tard dans le style
        <main className="container">
            <section className="trending">
                <h1 className="title">Series</h1>
            </section>
            {data.length == 0 || undefined ? <Loader /> :
                <Swiper className="slider">
                    {data.map((serie) => {
                        if (serie.media_type === "tv")
                            return <SwiperSlide className="slider-content" key={serie.id}>
                                <img
                                    className="slider-content-img"
                                    src={`https://image.tmdb.org/t/p/w500${serie.backdrop_path}`}
                                    alt={serie.title || serie.name}
                                />
                                <div className="slider-content-text">
                                    <div className="infos trending-title-infos">
                                        <p>{moment(serie.release_date).format("YYYY")}</p>
                                        <span className="infos-circle"></span>
                                        <p className="infos-serie trending-title-infos">{serie.media_type}</p>
                                    </div>
                                    <h2 className="trending-title">
                                        {serie.original_title || serie.name}
                                    </h2>
                                </div>
                            </SwiperSlide>
                    })}
                </Swiper>
            }
        </main>
    )
}
export default Series;