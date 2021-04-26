import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS_CREATED } from './requestGraphQl';


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
    //get the month as text
    posts.map((postData) => {
        const dataString = `/Date(${postData.createdAt})/`;
        const timestamp = +dataString.replace(/\/Date\((.*?)\)\//g, '$1');
        const x = new Date(timestamp);
        setEachMonth((n) => [...n, x.toLocaleString('default', { month: 'long' })]);
    });
  }, [posts]);


  let months = new Map(); //count the posts for each month
  eachMonth.map((d) => {
    if (months.has(d)) {
      months.set(d, months.get(d) + 1);
    } else months.set(d, 1);
  });

  const countMonths = []; //list months and the numbers of posts for each month
  months.forEach((k, v) => {
    countMonths.push({
      month: v,
      number: k,
    });
  });

  return (
    <div>

    </div>
  );

}

export default GetDataFromGraphQl;