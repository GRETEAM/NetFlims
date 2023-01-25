import Movies from "../components/Movies";
import useFetch from "../hooks/useFetch";

const Dashboard = () => {

  const {loading, error, data} = useFetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}`)
  // console.log(data.results);

  
  return (  
    <main className="container">
      <section className="trending">
        <h1>Trending</h1>
        <p>Carousel</p>
      </section>
      <section className="recommend">
        <Movies movies={data.results} />
      </section>
    </main>
  );
}
 
export default Dashboard;