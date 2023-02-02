import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/actionMovies";
import Card from "../components/Card";
import Loader from "../components/Loader";

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
    <main className="container">
      <h1 className="title">Movies</h1>
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
    </main>
  );
};

export default Movies;
