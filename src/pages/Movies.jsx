import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchScroll } from "../actions/actionMovies";
import Card from "../components/Card";
import Loader from "../components/Loader";

const Movies = () => {
  const movies = useSelector((store) => store.reducerMovies);
  const dispatch = useDispatch();

  const [data, SetData] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    const infiniteCheck = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (scrollHeight - scrollTop === clientHeight) {
        setPageIndex((pageIndex) => pageIndex + 1);
        console.log(pageIndex);
        dispatch(fetchScroll(pageIndex+1));
      }
    };
    window.addEventListener("scroll", infiniteCheck);
    return () => {
      window.removeEventListener("scroll", infiniteCheck);
    };
  }, [pageIndex]);


  useEffect(() => {
    dispatch(fetchScroll(pageIndex));
  }, []);


  useEffect(() => {
    SetData(movies.data);
  }, [movies]);

  console.log(data);

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
