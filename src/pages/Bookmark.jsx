import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import moment from "moment";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import Loader from "../components/Loader";

const Bookmark = () => {
  const user = useSelector((store) => store.reducerUser);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    setBookmarks(user.bookmarks);
  }, [user, []]);
  console.log(bookmarks);

  return (
    <div className="container">
      <section className="recommend">
        <Swiper className="slider">
          {bookmarks?.map((movie) => {
            return (
              <SwiperSlide className="slider-content" key={movie.id}>
                <Link to={`/${movie.id}`} state={{ movie: movie }}>
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
      </section>
    </div>
  );
};

export default Bookmark;
