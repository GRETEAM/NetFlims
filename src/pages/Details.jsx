import React from "react";
import { useParams, useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Details = () => {
  const id = useParams().detail;
  const location = useLocation();
  const { loading, error, data } = useFetch(
    `https://api.themoviedb.org/3/${location.state.movie}/${id}?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`
  );
  console.log(data);
  return (
    <div className="detail_container">
      <div className="detail container">
        <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="" />
        <h1>{data.name || data.original_title}</h1>
        <p className="overview">{data.overview}</p>
        <p className="revenue">Revenue : ${data.revenue}</p>
      </div>
    </div>
  );
};

export default Details;
