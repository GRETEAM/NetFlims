import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/actionMovies";
import Card from "../components/Card";
import Loader from "../components/Loader";

const Movies = () => {
  const [data, SetData] = useState([]);
  const dispatch = useDispatch();
  const [pageIndex, setPageIndex] = useState(1);
  
  useEffect(() => {
    const infiniteCheck = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  
      if (scrollHeight - scrollTop === clientHeight) {
        setPageIndex(pageIndex + 1);
        console.log("Index de la page :", pageIndex);
        console.log("Index de la page :", setPageIndex);
      }
    };
    window.addEventListener("scroll", infiniteCheck);

    return () => {
      window.removeEventListener("scroll", infiniteCheck);
    };
  }, []);
  // console.log(data);
  console.log(pageIndex);

  useEffect(() => {
    const loadMovies = async () => {
      await dispatch(fetchData(pageIndex));
    };

    loadMovies();
    
  }, []);

  const movies = useSelector((store) => store.reducerMovies);
  // useEffect(() => {
  //   SetData(movies.data);
  // }, [movies]);
  console.log(movies);

  return (
    <main className="container">
      <h1 className="title">Movies</h1>
      <div className="card-container">
        {movies.length == 0 || undefined ? (
          <Loader />
        ) : (
          movies.map((movie) => {
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
