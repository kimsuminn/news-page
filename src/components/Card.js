import React from 'react'
import { useNavigate } from 'react-router-dom';

function Card({ item }) {

  const navigate = useNavigate();
  
  return (
    <div className='item'>
      <figure>
        {
          item.image_url ? 
          <img src={item.image_url} alt={item.article_id} /> :
          <img src={`${process.env.PUBLIC_URL}/no_img.jpg`} alt={item.article_id}/>
        }
      </figure>
      <h2>{item.title}</h2>
      <div className="btn">
        <button 
          type="button"
          onClick={() => navigate(`/news/${item.article_id}`)}
        >VIEW MORE</button>
      </div>
    </div>
  )
}

export default Card;
