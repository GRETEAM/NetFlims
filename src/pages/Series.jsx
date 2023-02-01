import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/actionMovies";
import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../components/Loader";
import "swiper/scss";
import Card from "./Card";

const Series = () => {
  const [data, SetData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadSeries = async () => {
      await dispatch(fetchData());
    };
    loadSeries();
  }, [dispatch]);
  const Series = useSelector((store) => store.reducerSeries);
  // console.log(Series)
  useEffect(() => {
    SetData(Series.data);
  }, [Series]);
  return (
    <section className="container">
      <div className="card-container">
        {data.length == 0 || undefined ? (
          <Loader />
        ) : (
          data.map((serie) => {
            if (serie.media_type === "tv") {
              return <Card data={serie}  key={serie.id}  />;
            }
          })
        )}
      </div>
    </section>
  );
};
export default Series;
