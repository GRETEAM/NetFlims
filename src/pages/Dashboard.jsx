import TrendingMovies from "../components/TrendingMovies";
import useFetch from "../hooks/useFetch";

const Dashboard = () => {

  const {loading, error, data} = useFetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}`)
  console.log(data.results);

  
  return (
    <main className="container">
      <section className="trending">
        <h1 className="title">Trending</h1>
      </section>
      
        <TrendingMovies loading={loading} movies={data.results} />
    </main>
  );
};
 
export default Dashboard;