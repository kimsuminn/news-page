import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNewsData } from '../store/reducers/newsSlice';
import { useLocation, useNavigate } from 'react-router-dom';

function Tab() {

  const navigate = useNavigate();
  const location = useLocation();

  const [tabMenu, setTabMenu] = useState('');

  const tabList = [
    { id: 0, name: '', btnText: '전체' },
    { id: 1, name: 'top', btnText: 'Top' },
    { id: 2, name: 'sports', btnText: '스포츠' },
    { id: 3, name: 'technology', btnText: '기술' },
    { id: 4, name: 'business', btnText: '경제' },
    { id: 5, name: 'science', btnText: '과학' },
    { id: 6, name: 'entertainment', btnText: '연예' },
    { id: 7, name: 'health', btnText: '건강' },
    { id: 8, name: 'world', btnText: '세계' },
    { id: 9, name: 'politics', btnText: '정치' },
    { id: 10, name: 'environment', btnText: '환경' }
  ]

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsData(tabMenu));
  }, [tabMenu])

  return (
    <div className='tab'>
      <div className="tab_inner">
        <h1 onClick={() => navigate('/')}>NEWS</h1>
        <ul>
          {
            tabList.map(val => (
              <li 
                key={val.id} 
                onClick={() => {
                  setTabMenu(val.name); 
                  navigate('/');
                }}
                className={
                  tabMenu === val.name && location.pathname === '/' ? 
                  'on' : ''
                }
              >{val.btnText}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Tab;
