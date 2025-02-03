import './App.css';
import { Routes, Route } from 'react-router-dom';
import Tab from './components/Tab';
import News from './page/News';
import NewsDetail from './page/NewsDetail';

function App() {
  return (
    <div className="App">
      <Tab />
      <Routes>
        <Route path='/' element={<News />}/>
        <Route path='/news/:id' element={<NewsDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
