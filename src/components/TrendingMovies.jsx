import moment from "moment";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import Loader from "./Loader";

const TrendingMovies = ({ movies }) => {

  return (
    <section className="recommend">
      {movies.length === 0 || undefined ? (
          <Loader />
        ) : (
        <Swiper
          rewind={true}
          className="slider"
          slidesPerView={"auto"}
          navigation={true}
          modules={[Navigation]}
        >
          {movies.map((movie) => {
            return (
              <SwiperSlide className="slider-content" key={movie.id}>
                <Link to={`/${movie.id}`} state={{ movie: movie.media_type }}>
                  <img
                    className="slider-content-img"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title || movie.name}
                  />
                  <div className="slider-content-text">
                    <div className="infos trending-title-infos">
                      <p>{moment(movie.release_date).format("YYYY")}</p>
                      <span className="infos-circle"></span>
                      <p className="infos-movie trending-title-infos">
                        {movie.media_type}
                      </p>
                    </div>
                    <h2 className="trending-title">
                      {movie.original_title || movie.name}
                    </h2>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
};

export default TrendingMovies;
