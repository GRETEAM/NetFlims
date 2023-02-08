export const fetchScroll = (pageIndex) => {
  return async dispatch => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}&page=${pageIndex}`
    );
    console.log(pageIndex)
    const responseData = await response.json();
    let movies = responseData.results;
    dispatch({ type: "FETCH_MOVIE_SCROLL", movies });
  };
};

export const fetchAllTypes = () => {
  return async dispatch => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}&page=${2}`);
    const responseAll = await response.json();
    let allTypes = responseAll.results;
    dispatch({ type: "FETCH_ALL_TYPEs", allTypes });
  }
}