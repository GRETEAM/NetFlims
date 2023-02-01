import moment from "moment";
import React from "react";
import movies from "../assets/icons/icon-movies.svg";
import series from "../assets/icons/icon-series.svg";

export default function Card({ data }) {
  return (
    <div className="card">
      <div className="card-img">
        <img
          className="container-content-img"
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt={data.title || data.name}
        />
      </div>
      <div className="card-description">
        <p className="card-description-date">
          {data.release_date || moment(data.release_date).format("YYYY")}
        </p>
        <div className="card-description-list">
          <p>
            {data.media_type === "movie" ? (
              <img src={movies} className="card-description-image" />
              ) : (
              <img src={series} className="card-description-image" />
            )}
          </p>
          <p className="card-description-media">
          {data.media_type === "movie" ? (
              "Movies"
              ) : (
              "Tv Series"
            )}
          </p>
        </div>
      </div>
      <h2 className="card-description-title">
        {data.original_title || data.name}
      </h2>
    </div>
  );
}
