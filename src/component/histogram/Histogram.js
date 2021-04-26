import React, { useEffect, useState } from 'react';
import './Histogram.css'
import { scaleBand, scaleLinear} from 'd3';
import {AxisLeft} from '../axis/AxisLeft'
import {AxisBottom} from '../axis/AxisBottom'


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

    sortByMonth(data);
  function sortByMonth(arr) {
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    arr.sort(function (a, b) {
      return months.indexOf(a.month) - months.indexOf(b.month);
    });
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

    const yScale = scaleBand()
    .domain(data.map((d) => d.month))
    .range([0, innerHeight])
    .paddingInner(0.3);

     const xScale = scaleLinear()
    .domain([0, maxNumberPosts])
    .range([0, innerWidth]);



    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left},${margin.top})`}>
                 <AxisLeft yScale={yScale} />
                 <AxisBottom xScale={xScale} innerHeight={innerHeight} />


            </g>

        </svg>
    );
}

export default Histogram;