import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/actionMovies';
import Loader from '../components/Loader';

const Series = () => {
    const [data, SetData] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        const loadSeries = async () => {
            await dispatch(fetchData());
        };
        loadSeries();
    }, [dispatch]);
    const Series = useSelector(store => store.reducerSeries);
    // console.log(Series)
    useEffect(() => {
        SetData(Series.data)
    }, [Series]);
    return (
        //style a mettre plus tard dans le style
        <div style={{position:"relative"}}>
            {data.length == 0 || undefined ? <Loader/>:
            data.map((serie)=>{
                if(serie.media_type === "tv")
                return <p key={serie.id}> {serie.original_title || serie.name}</p>
            })

            }
          
        </div>
    )
}
export default Series;