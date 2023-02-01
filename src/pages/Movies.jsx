import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/actionMovies";
import Loader from "../components/Loader";
import Card from "./Card";

const Movies = () => {
  const [data, SetData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadMovies = async () => {
      await dispatch(fetchData());
    };
    loadMovies();
  }, [dispatch]);
  const movies = useSelector((store) => store.reducerMovies);
  useEffect(() => {
    SetData(movies.data);
  }, [movies]);
  return (
    <section className="container">
      <div className="card-container">
        {data.length == 0 || undefined ? (
          <Loader />
        ) : (
          data.map((movie) => {
            if (movie.media_type === "movie") {
              return <Card data={movie} key={movie.id} />;
            }
          })
        )}
      </div>
    </section>
  );
};
export default Movies;
