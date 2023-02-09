import { useLocation, useParams } from "react-router-dom";
import Pin from "../components/Pin";
import useFetch from "../hooks/useFetch";
import Similar from "./Similar";

const Details = () => {
  const location = useLocation();
  const data = location.state.movie;

  return (
    <div className="detail_container ">
      <div className="detail-image">
        <Pin pageData={data} />
        <img
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt={data.name || data.original_title}
        />
      </div>

      <div className="detail-card">
        <h1>{data.name || data.original_title}</h1>
        <p className="overview">{data.overview}</p>
        <p>Vote: {data.vote_average}/10</p>
        <p className="revenue">Revenue : ${data.revenue}</p>
      </div>
      <Similar media_type={data.media_type} movie_id={data.id}/>
    </div>
  );
};

export default Details;
