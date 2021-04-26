import React, { useEffect, useState } from 'react';
import './Histogram.css'


const width = 960;
const height = 500;
const margin = { top: 20, right: 20, bottom: 20, left: 100 };

function Histogram(countMonths) {
    const [data, setData]=useState([]);

    useEffect(()=>{
        if(countMonths){
            setData(countMonths)
        }
    },[data,countMonths])



    return (
        <svg width={width} height={height}>

        </svg>
    );
}

export default Histogram;