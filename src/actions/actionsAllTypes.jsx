
export const fetchAllTypes = () => {
  return async dispatch => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}&page=5`);
    const responseAll = await response.json();
    console.log(responseAll);
    let allTypes = responseAll.results;
    console.log(allTypes);
    dispatch({ type: "FETCH_ALL_TYPES", allTypes });
  };
};