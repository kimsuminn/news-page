import { useSelector } from 'react-redux';
import Card from './Card';

function CardBox() {

  const news = useSelector(state => state.news.news);

  return (
    <div className='all'>
      {
        news?.map(val => (
          <Card key={val.article_id} item={val} />
        ))
      }
    </div>
  )
}

export default CardBox;