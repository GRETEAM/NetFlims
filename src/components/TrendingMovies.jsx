import moment from "moment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import Loader from "./Loader";

const TrendingMovies = ({ loading, movies }) => {
  return (
    <section className="recommend">
    {loading ? <Loader /> : (
      <Swiper
        slidesPerView={2}
        spaceBetween={16}
        className="slider"
      >
        {movies.map(movie => {
          return (
            <SwiperSlide className="slider-content" key={movie.id}>
              <img
                className="slider-content-img"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
              />
              <div className="slider-content-text">
                <div className="infos">
                  <p>{moment(movie.release_date).format('YYYY')}</p>
                  <span className="infos-circle"></span>
                  <p className="infos-movie">{movie.media_type}</p>
                </div>
                <h2 className="trending-title">{movie.original_title}</h2>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    )}
    </section>
  );
};
 
export default TrendingMovies;