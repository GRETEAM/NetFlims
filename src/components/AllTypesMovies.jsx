import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTypes } from "../actions/actionMovies";
import Card from "./Card";
import Loader from "./Loader";


const AllTypesMovies = () => {
  const types = useSelector((store) => store.reducerMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTypes())
  }, []);

  return (
    <section>
      <h2 className="title">Recommand</h2>
      <div className="card-container">
        {types.length == 0 || undefined ? (
          <Loader />
        ) : (
          types.map((type) => {
            return <Card data={type} key={type.id} />;
          })
        )}
      </div>
    </section>
  );
}
 
export default AllTypesMovies;