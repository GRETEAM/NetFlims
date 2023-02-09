import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { fetchSimilar } from "../actions/actionSimilare";

const Similar = ({movie_id, media_type}) => {
  const movies = useSelector((store) => store.reducerSimilar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSimilar(movie_id, media_type));
  }, []);

  return (
    <main className="container">
      <h1 className="title">Movies</h1>
      <div className="card-container">
        {movies.length == 0 || undefined ? (
          <Loader />
        ) : (
          movies.map((movie) => {
              return <Card data={movie} key={movie.id} />;
          })
        )}
      </div>
    </main>
  );
};

export default Similar;
