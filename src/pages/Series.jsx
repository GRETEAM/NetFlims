import React from 'react'
import { useSelector } from 'react-redux';

const Series = () => {
    const series =useSelector((store)=>{return store.reducerSeries})
    console.log(series);
    return (
        <div>Series</div>
    )
}
export default Series