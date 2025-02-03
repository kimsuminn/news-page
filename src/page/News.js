import React from 'react';
import { useSelector } from 'react-redux';
import CardBox from '../components/CardBox';

function News() {

  const newsState = useSelector(state => state.news.newsState);

  return (
    <div className='news'>
      {
        newsState === 'loading' ?
        <figure><img src="image/loading.gif" alt="loading" /></figure> : 
        <CardBox />
      }
    </div>
  )
}

export default News;
