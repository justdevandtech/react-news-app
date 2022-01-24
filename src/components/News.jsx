import React, { useState, useEffect } from 'react';
import { SearchBox } from './SearchBox'
import axios from 'axios';
import { NewsCard } from './NewsCard';

export const News = () => {
    const [news, setNews] = useState([]);

    const fetchNews = () => { 
        axios
          .get("http://localhost:5000/")
          .then(res => {
            setNews(res.data);
          })
          .catch(err => {
            console.log(err);
          });
    }

    useEffect(() => {
        fetchNews();
    }, []);
    console.log(news);

  return (
   <div>
      <SearchBox/>
      <NewsCard news={news}/>
   </div>
  );
};
