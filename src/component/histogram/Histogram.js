import React, { useEffect, useState } from 'react';
import './Histogram.css'


const width = 960;
const height = 500;
const margin = { top: 20, right: 20, bottom: 20, left: 100 };

function Histogram(countMonths) {
    const [data, setData]=useState([]);

    useEffect(()=>{
        if(countMonths){
            setData(countMonths.countMonths)
        }
    },[data,countMonths])

    const { chain } = require('lodash');
    var sortedObjByCount = chain(data).sortBy('number').reverse().value();
    var maxNumberPosts; // get max number posts/month
    for (var i in sortedObjByCount) {
            maxNumberPosts = sortedObjByCount[i].number;
            break;
  }

console.log("NUMBERRR", maxNumberPosts)

    return (
        <svg width={width} height={height}>

        </svg>
    );
}

export default Histogram;