import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS_CREATED } from './requestGraphQl';
import Histogram from './histogram/Histogram'


function GetDataFromGraphQl() {
  const { data } = useQuery(GET_POSTS_CREATED);
  const [posts, setPosts] = useState([]);
  const [eachMonth, setEachMonth] = useState([]);

    useEffect(() => {
    if (data) {
      setPosts(data.allPosts);
    }
  }, [data]);

  useEffect(() => {
    posts.map((postData) => {
        const dataString = `/Date(${postData.createdAt})/`;
        const timestamp = +dataString.replace(/\/Date\((.*?)\)\//g, '$1');
        const x = new Date(timestamp);
        // console.log("Year",x.getFullYear())
        setEachMonth((n) => [...n, x.toLocaleString('default', { month: 'long' })]);  //get the months as text
    });
  }, [posts]);


  let months = new Map(); //count the posts for each month
  eachMonth.map((d) => {
    if (months.has(d)) {
      months.set(d, months.get(d) + 1);
    } else months.set(d, 1);
  });

  const maxNumberPosts = new Map([...months.entries()].sort((a, b) => b[1] - a[1])).values().next().value; //the largest number of posts in a month

  const countMonths = []; //list months and total numbers of posts for each month
  months.forEach((k, v) => {
    countMonths.push({
      month: v,
      number: k,
    });
  });

  return (
    <div>
         <Histogram countMonths={countMonths} maxNumberPosts={maxNumberPosts}> </Histogram>
    </div>
  );

}

export default GetDataFromGraphQl;