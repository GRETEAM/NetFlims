import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import TrendingMovies from "../components/TrendingMovies";
import useFetch from "../hooks/useFetch";

const Dashboard = () => {
  
  const { loading, error, data } = useFetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  // console.log(data.results);


  const [filteredMovies, setFilteredMovies] = useState();

  useEffect(() => {
    setFilteredMovies(data.results);
  }, [data]);
  
  const filter = (e) => {
    console.log(e.target.value);
    const tmp = data.results.filter((item) => {
      return (item.original_title || item.name)
        .toLowerCase()
        .includes(e.target.value);
    });
    setFilteredMovies(tmp);
  };
  
  // console.log(filteredMovies);

  return (
    <main className="container">
    
      <SearchBar filter={filter} placeholder="Search for movies or TV series" />
      
      <section className="trending">
        <h1 className="title">Trending</h1>
      </section>
      
      <TrendingMovies loading={loading} movies={filteredMovies} />
      
    </main>
  );
};

export default Dashboard;
