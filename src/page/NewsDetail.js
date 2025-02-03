import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function NewsDetail() {

  const { id } = useParams();
  const news = useSelector(state => state.news.news);

  const [item, setItem] = useState(null);

  useEffect(() => {
    setItem(
      news?.filter(item => item.article_id === id)[0]
    );
  }, []);

  return (
    <div className='detail'>
      {
        item ?
        <div className='item_box'>
          <h2>{item.title}</h2>
          <div className="info">
            <p className="date">작성일: {item.pubDate}</p>
            <p className="url"><a href={item.link} target='_blank'>원본기사 보러가기</a></p>
          </div>
          {
            item.image_url ?
              <figure><img src={item.image_url} alt={item.article_id} /></figure> :
              <></>
          }
          {
            item.description ?
              <div className="description">
                <p>{item.description}</p>
              </div> :
              <></>
          }
        </div> :
        <figure><img src="image/loading.gif" alt="loading" /></figure>
      }
    </div>
  )
}

export default NewsDetail;
