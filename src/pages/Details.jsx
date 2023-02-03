import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import Pin from "../components/Pin";
import useFetch from "../hooks/useFetch";

const Details = () => {
  const location = useLocation();
  const data = location.state.movie;

  return (
    <div className="detail_container">
      <div className="detail container">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt=""
        />
        <h1>{data.name || data.original_title}</h1>
        <p className="overview">{data.overview}</p>
        <p className="revenue">Revenue : ${data.revenue}</p>
        <Pin pageData={data} type={location.state.movie} />
      </div>
    </div>
  );
};

export default Details;
