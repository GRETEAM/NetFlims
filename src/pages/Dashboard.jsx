import useFetch from "../hooks/useFetch";

const Dashboard = () => {

  const {loading, error, data} = useFetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}`)
  console.log(data);
  
  return (  
    <h1>Dashboard</h1>
  );
}
 
export default Dashboard;