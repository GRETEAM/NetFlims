import React from "react";

export default function Card({ data }) {
  console.log(data);
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
        <p className="card-description-date">{data.release_date}</p>
        <p className="card-description-media">{data.media_type}</p>
        <h2 className="card-description-title">
          {data.original_title || data.name}
        </h2>
      </div>
    </div>
  );
}
